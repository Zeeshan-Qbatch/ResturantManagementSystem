var mongoose = require('mongoose');

var orderItem = new mongoose.Schema({

 o_id: {type: String , required: true},
 i_id: {type: String , required: true},
 quantity: {type: Number , required: true},

 created : {type : Date},
 updated : {type : Date}

});


module.exports = mongoose.model('orderItem' , orderItem);