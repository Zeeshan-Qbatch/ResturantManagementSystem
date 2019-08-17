const initialState = {
  fetching: false,
  itemName: null,
  itemPrice: null,
  details:null,
  imageUrl:null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    
    case 'ADD_ITEM_REQUEST': {
      return {
        fetching: true
      };
    }
    case 'ADD_ITEM_SUCCESS': {
      return {
        ...initialState,
        fetching: false,
        ...action.payload
      };
    }
    case 'ADD_ITEM_FAILED': {
      return {
        ...state,
        fetching: false
      };
    }
  }
};

export default user;
