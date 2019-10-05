const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const clc = require('cli-color');
const i18nFiles = [{
  lang: 'en',
  path: path.resolve(__dirname, '../../src/assets/i18n/en.json')
}].map(file => ({
  ...file,
  data: JSON.parse(fs.readFileSync(file.path))
}));
const extractedI18nFile = path.resolve(__dirname, '../../i18n.json');
const extractedI18n = JSON.parse(fs.readFileSync(extractedI18nFile));
let valid = true;

function clearValues(item) {
  return Object.keys(item).reduce((acc, key) => {
    if (typeof item[key] === 'object') {
      acc[key] = clearValues(item[key]);
      return acc;
    }

    acc[key] = '';
    return acc;
  }, {})
}

function difference(object, base) {
  function changes(object, base) {
    return _.transform(object, function (result, value, key) {
      if (!_.isEqual(value, base[key])) {
        result[key] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
      }
    });
  }

  return changes(object, base);
}

function computeDifferences() {
  i18nFiles.forEach((file, index) => {
    console.log(clc.blue(`Checking i18n for ${file.lang} missing strings...`));
    displayMissingI18nString(difference(extractedI18n, clearValues(i18nFiles[index].data)), []);
    console.log('\n');
  });
}

function displayError(error) {
  console.error(clc.red(`${error} is missing`))
}

function displayMissingI18nString(object, parentPath) {
  Object.keys(object).forEach((key) => {
    if (typeof object[key] === 'object') {
      return displayMissingI18nString(object[key], [...parentPath, key])
    }

    valid = false;
    displayError(`"${[...parentPath, key].join('.')}"`)
  })
}

computeDifferences();

if (!valid) {
  process.exitCode = 1;
  console.log(clc.red('There are some missing translation strings!'));
  console.log(clc.red('Please check if you didn\'t misspelled any translation string or you should add the missing one'));
} else {
  console.log(clc.green('There aren\'t any missing translation strings!'));
  console.log('\n');

  console.log(clc.blue('Removing the extract i18n file...'));
  fs.unlinkSync(extractedI18nFile);
  console.log(clc.green('Done!'));
  process.exitCode = 0;
}
