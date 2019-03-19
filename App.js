let express = require ('express');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.post('/home',function(req,res){
    res.json({a:1})
})
app.use(express.static('./'));
app.listen(4242);