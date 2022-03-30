const fs = require("fs");
express=require('express')
cors=require('cors')
bodyParser=require('body-parser')
config=require('../configurations/config')
app=new express()
app.use(cors());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
//http get
app.get("/",function(request,response){
    response.send("Testing Express ....!");
});
app.post("/customers",function(request,response){
    console.log(request.body);
    response.send({message:"Data Sored....."});
})





app.set('port',config.port);

app.listen(app.get('port'),function()
{
    console.log('Server started at ....'+app.get('port'));
});



