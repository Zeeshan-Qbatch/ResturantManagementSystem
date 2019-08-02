const item= require('../../models/items');
const GetItems= () =>{
  item.find({}, function(err, items) {
    return {name,_id}
  });
}
module.exports = GetItems;
