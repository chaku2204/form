const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const form_data_schema = new mongoose.Schema({
  name: String,
  email: String,
  user: String,
  pass: String,
  mobile: String,
  tokens:[{
        token:{
          type:String,
        }
  }],
});

form_data_schema.methods.genrateAuthToken = async function(){
        try{
          
            const token = jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY);
           
            this.tokens = this.tokens.concat({token:token});
            await this.save();
           return token;
           
           
        }catch(e){
          console.log("error"+e);
        }
}
form_data_schema.pre("save",async function(next){

  if(this.isModified("pass"))
  {
    this.pass = await bcrypt.hash(this.pass,10);
    
  }
  next();
})

const formmodel = new mongoose.model("formdata",form_data_schema);

module.exports = formmodel;
