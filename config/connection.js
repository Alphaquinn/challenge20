const mongoose=require('mongoose');
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/barnsandnotsonoble',{
    useNewUrlParser:true,
    ueUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false,
});

module.exports=mongoose.connection;