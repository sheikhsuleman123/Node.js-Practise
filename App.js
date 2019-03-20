let express = require ('express');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.post('/home',function(req,res){
    res.sendfile('./index2.html');
})
app.use(express.static('./'));
app.listen(4242);