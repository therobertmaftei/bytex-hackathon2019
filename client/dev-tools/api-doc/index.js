const express = require('express');
const path = require('path');
const app = express();
const swaggerUi = require('swagger-ui-express');
const docs = [
  {
    path: '/api',
    file: '../../swagger/api/swagger.json'
  }
];
const options = {
  explorer: true,
  swaggerOptions: {
    urls: [
      {
        url: '/api',
        name: 'Api'
      }
    ]
  }
};

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(null, options));

docs.forEach((doc) => {
  app.get(doc.path, (req, res) => {
    res.header('Content-Type', 'application/json');
    res.sendFile(path.resolve(__dirname, doc.file));
  });
});
app.listen(3000, () => console.log(`API documentation is available on http://localhost:3000/api-doc`));
