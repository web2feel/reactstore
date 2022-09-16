export const initialState = {
    cart:[],
    products:[],
    products_loading: true
}

export const reducer = (prevState,action) => {
    switch(action.type){
        // Fetched products from server
        case "PRODUCTS_LOADED":
            return {...prevState, products:[...action.payload], products_loading:false} 
        default:
            return prevState    
    }
}