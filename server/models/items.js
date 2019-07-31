import mongoose from 'mongoose';

const item = new mongoose.Schema({
  
  i_id: { type:String,required: true },
  i_name: { type: String },
  i_price: { type: Number },
  i_details: { type: String },
  i_image: { type: String },
  
  created : {type : Date},
  updated : {type : Date}
});

export default mongoose.model('item' , item );
