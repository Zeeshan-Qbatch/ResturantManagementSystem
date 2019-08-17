import axios from 'axios';
import { notification } from 'antd';
export const addItem = ({itemName,itemPrice,details,imageUrl}) => (dispatch) => {
  console.log('add item action',itemPrice,itemName,details,imageUrl)
  dispatch({ type: 'ADD_ITEM_REQUEST' });

   const url = 'http://localhost:5000/addItem';

   return axios.post(url,{itemName,itemPrice,details,imageUrl}).then(({ data }) => {
     const { item } = data;
     return dispatch({ type: 'ADD_ITEM_SUCCESS', payload: item });
  }).catch((error) => {
    const { data } = error.response;

    notification.error({
      message: 'ADD ITEM',
      description: data
    });

    dispatch({ type: 'ADD_ITEM_FAILED' });
  });
};