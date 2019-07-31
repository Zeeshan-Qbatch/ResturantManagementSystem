const mongoose=require('mongoose');

const order = new mongoose.Schema({
  status: {type:String,required: true },
  Total_Price : {type: Number},
  completed_Time: { type: Date},
  created : {type : Date},
  updated : {type : Date}
});

module.exports = mongoose.model('order' , order);
