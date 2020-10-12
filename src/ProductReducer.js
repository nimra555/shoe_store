const   ProductReducer = ((state, action) => {
    switch (action.type) {
        case 'Add_Product': {
            return {
                ...state,
                product: [action.payload, ...state.product]
            }  
        }
        case "Delete_Product" : {
            return {
                ...state,
                product : state.product.filter(pro => 
                    pro.id !== action.payload)
            }
        }  
        default: return state;
    }
  }
);

export default ProductReducer;