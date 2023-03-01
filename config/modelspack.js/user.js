const {Schema, Model}= require('mongoose');
const BOOKSchema= require('./book');
const USERSchema = new Schema(
    {
        USERName:{
            type:String,
            required:true,
            unique:true,

        },
        EMAIL:{
        type: String,
        required: true,
        unique: true,
        match: `/^([a-z0-9_\.-]+)@([\da-z\.-]+)([a-z\.]{2,6})$`
        },
        PASS:{
            type:String,
            required: true,
            length:(x.min=6)(x.max=20),
        },
        booksSTORED:[BOOKSchema],

    },
    {toJSON:{
        virtuals:true,
    },

}
);