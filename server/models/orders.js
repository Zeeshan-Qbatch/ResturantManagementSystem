import mongoose from 'mongoose';

const order = new mongoose.Schema({

  o_id: {type: String, required: true},
  i_id: {type:String,required: true },
  o_status: {type:String,required: true },

  created : {type : Date},
  updated : {type : Date}
});

export default mongoose.model('order', order);
