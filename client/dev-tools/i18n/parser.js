const propertiesParser = require('properties');
const immutable = require('immutable');
const fs = require('fs');
const path = require('path');
const helper = {};
const i18nFolder = './src/assets/i18n';
let languages = immutable.Map({});

const createI18nFolder = (i18n) => {
  if (!fs.existsSync(i18n)) {
    fs.mkdirSync(i18n);
  }
};

const isDirectory = source => fs.lstatSync(source).isDirectory();

const clearName = name => name.replace('.properties', '');

const readPropertyFile = filePath => new Promise((resolve => {
  propertiesParser.parse(filePath, { path: true }, (error, response) => {
    if (error) {
      return;
    }

    resolve(Object.keys(response).reduce((acc, key) => {
      if (key === '[${section}]') {
        return acc;
      }

      return {
        ...acc,
        [key]: response[key] || '',
      };
    }, {}));
  });
}));

const processDirectory = async (parent, source) => {
  const directories = fs.readdirSync(source);
  for (let i = 0; i < directories.length; i++) {
    const name = directories[i];
    if (isDirectory(path.join(source, name))) {
      await processDirectory([...parent, clearName(name)], path.join(source, name));
    } else if (name.includes('.properties')) {
      const data = await readPropertyFile(path.join(source, name));
      const setIn = [...parent, clearName(name)];
      if (languages.getIn(setIn)) {
        languages = languages.setIn(setIn, {
          ...languages.getIn(setIn).toJS(),
          ...data,
        });
      } else {
        languages = languages.setIn(setIn, data);
      }
      if (data) {
        const [language, ...prefix] = setIn;
        if (prefix.length) {
          const helperPath = prefix.join('.');
          Object.keys(data).forEach((key) => {
            helper[`${helperPath}.${key}`] = data[key];
          })
        }
      }
    }
  }
};

const writeI18nToJson = (filename, data) => new Promise((resolve => {
  fs.writeFile(filename, data, (err) => {
    if (err) {
      console.log(err);
    }

    resolve();
  });
}));

const startParser = async () => {
  await processDirectory([], './bundles');
  const data = languages.toJS();
  const files = Object.keys(data);
  createI18nFolder(i18nFolder);
  for (let i = 0; i < files.length; i++) {
    await writeI18nToJson(`${i18nFolder}/${files[i].toLowerCase()}.json`, JSON.stringify(data[files[i]]));
  }
};

const writeHelper = () => {
  fs.writeFile(`${i18nFolder}/helper.json`, JSON.stringify(helper), (err) => {
    if (err) {
      console.log(err);
    }
  });
};

console.info('start parsing i18n data');
startParser().then(() => {
  writeHelper();
  console.info('parsing process complete')
});
