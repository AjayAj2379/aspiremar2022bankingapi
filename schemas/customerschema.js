var mongoose = require('mongoose');
Schema = mongoose.Schema;

var customerSchema = new mongoose.Schema({
    customerId: Number,
    accountNo:Number,
    firstName:String,
    lastName:String,
    userName:String,
    password:String
})


module.exports.CustomerModel = mongoose.model('CustomerModel',customerSchema );

