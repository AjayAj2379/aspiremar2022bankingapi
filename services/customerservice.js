var mongoose = require('mongoose');
var CustomerModel= require('../schemas/customerschema').CustomerModel;
var config=require('../configurations/config');
mongoose.connect(config.uri);
//mongoose.connect(config.url, config.mongodb, config.mongoport);
console.log("Mongodb connected.....")
module.exports.Add=function(customerObj)
{

    var db = mongoose.connection;
    db.once('open', function() {
    });

    var obj = new CustomerModel(
        {
            customerId: customerObj.customerId,
            accountNo:customerObj.accountNo,
            firstName:customerObj.firstName,
            lastName:customerObj.lastName,
            userName:customerObj.userName,
            password:customerObj.password

        });
    obj.save(function(err,result){
        if(!err)
            console.log(result);

    });

}

//search

module.exports.Search= function getCustomer(userName){
    var query = CustomerModel.find({userName:userName});
    return query;
}






