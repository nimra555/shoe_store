const cartReducer = ((state, action) => {
    switch (action.type) {
        case 'Add_Product': {
            return [...state, action.payload];
        }    
        case "Delete_Product" : {
            return  state.filter(pro => 
                    pro.name !== action.payload.name)
            
        }  
        case 'PAY':
            return [];
        default: return state;
    }
  }
);

export default cartReducer;