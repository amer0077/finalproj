const mongoose =require('mongoose');

const PostSchema = new mongoose.Schema({
  

    name:{  type:String, required: true},
    imgUrl:{type:String },
    desc:{ type:String},
    nameU : {type:String},
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
  
  
       
      
    

});

module.exports = Post = mongoose.model('post',PostSchema)