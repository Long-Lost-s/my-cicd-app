const express = require('express');
const app = express();
const port = 80;  // Port 80 để khớp với Dockerfile và deployment.yaml

app.get('/', (req, res) => {
  res.send('Hello World! This is a simple Node.js app for CI/CD testing.');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});