let express = require ('express');                // Require or import the Express Library
let app = express();                              // Calling the Express Library
let bodyParser = require('body-parser');
app.use(bodyParser.json())
app.post('/home',function(req, res){
res.end();
})

app.use(express.static('./'));

app.listen(8080);                                 // Setting the starting port