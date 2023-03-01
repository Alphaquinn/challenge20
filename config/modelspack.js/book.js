const {schema}= require('mongoose');
const BOOKSchema=new schema ({
    author:[
        {
            type: String,
        },
    ],

    overview:{
        type:String,
        required: true,

    },
    BOOKID:{
        type:DataTypes.INTEGER,
        required:true,
    },
    BOOKImage:{
        type:String,
    },
    LINK:{
        type:String,
    },
    TITLEPAGE:{
        type: String,
        required: true,
    },

});
module.exports=BOOKSchema