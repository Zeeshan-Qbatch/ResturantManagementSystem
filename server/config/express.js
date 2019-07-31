const express=require('express');
//ongoose.Promise = global.Promise;
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS, HEAD'
  );
  next();
});
app.listen(5000, () => console.log(`Example app listening on port ${5000}!`));


//export default app;
