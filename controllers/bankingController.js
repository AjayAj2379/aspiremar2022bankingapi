const fs = require("fs");
express=require('express')
cors=require('cors')
bodyParser=require('body-parser')
config=require('../configurations/config')
var customerService = require("../services/customerservice");
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
    customerService.Add(request.body);

    response.send({message:"Data Sored....."});
})

app.get("/customers",function(request,response){
console.log(request.query.userName);
query=customerService.Search(request.query.userName);


    query.exec(function(err,data){
        if(err) {
            console.log(err)
            return response.json(500, err);
        }
        else {
            console.log(data);
            return response.json(200, data);
        }
    });

});



app.set('port',config.port);

app.listen(app.get('port'),function()
{
    console.log('Server started at ....'+app.get('port'));
});



