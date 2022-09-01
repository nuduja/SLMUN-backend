const { Schema, model } = require("mongoose");

const committeeSchema = new Schema(
  {
    Country: {
        type: String,         
        required: [true, "Please enter the Description"],    
        unique: true, 
        trim: true,
        
    },     
    
  },
  { timestamp: true }
);

const Commmittee = model("Commmittee", committeeSchema);

module.exports = Commmittee;
