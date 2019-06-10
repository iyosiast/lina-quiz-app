var express = require('express');
var app = express();


var dataQuestion = require('./data/questions.json');

app.set('port', process.env.PORT || 3000 );
// Pass the JSON data to the routes
app.set('appQuestion', dataQuestion);
app.set('view engine', 'ejs');
app.set('views', './views');


app.locals.siteTitle = 'Quiz';

app.use(express.static('./public'));
app.use(require('./routes/index'));



var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});
