const https = require("https");
const fs = require("fs");
express=require('express')
cors=require('cors')
bodyParser=require('body-parser')
config=require('../configurations/config')
app=new express()
app.get("/",function(request,response){
    response.send("Testing Express ....!");
});

app.set('port',config.port);

app.listen(app.get('port'),function()
{
    console.log('Server started at ....'+app.get('port'));
});
