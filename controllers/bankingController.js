const fs = require("fs");
express=require('express')
var multer  =   require('multer');
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

var storage = multer.diskStorage({
    destination: function (req, file, cb) {

        // Uploads is the Upload_folder_name
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now()+".jpg")
    }
})

// Define the maximum size for uploading
// picture i.e. 1 MB. it is optional
const maxSize = 1 * 10000 * 10000;

var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb){

        // Set the filetypes, it is optional
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);

        var extname = filetypes.test(path.extname(
            file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }

        cb("Error: File upload only supports the "
            + "following filetypes - " + filetypes);
    }

// mypic is the name of file attribute
}).single("mypic");

app.post('/upload-file',function(req,res){
    // Error MiddleWare for multer file upload, so if any
    // error occurs, the image would not be uploaded!
    upload(req,res,function(err) {

        if(err) {

            // ERROR occured (here it can be occured due
            // to uploading image of size greater than
            // 1MB or uploading different file type)
            res.send(err)
        }
        else {

            // SUCCESS, image successfully uploaded
            res.send("Success, Image uploaded!")
        }
    })
});




app.set('port',config.port);

app.listen(app.get('port'),function()
{
    console.log('Server started at ....'+app.get('port'));
});



