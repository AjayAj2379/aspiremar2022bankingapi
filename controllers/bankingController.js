express=require('express')
cors=require('cors')
bodyParser=require('body-parser')

app=new express()
app.get("/",function(request,response){
    response.send("Testing Express ....!");
});
