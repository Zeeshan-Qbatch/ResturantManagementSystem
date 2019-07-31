import express from 'express';
mongoose.Promise = global.Promise;
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

app.listen(5000, () => console.log(`Example app listening on port ${5000}!`));


export default app;
