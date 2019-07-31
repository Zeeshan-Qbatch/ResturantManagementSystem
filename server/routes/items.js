require('../config');
app.get('/test', function(req, res) {
  res.send('hello world');
});
