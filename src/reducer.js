export const state = { cart : 0 , cartitem : []};

export const reducer = (state,{type,payload})=>{
    switch (type) {
        case "ADD_TO_BASKET":
            return {...state, cartitem : [...state.cartitem,payload]}
        case "REMOVE" :
            const index = state.cartitem.findIndex(
                (basketItem)=> basketItem.image === payload
            );
            let newBasket = [...state.cartitem];

            if(index >= 0){
                newBasket.splice(index,1);
            }
            return {
                ...state,
                cartitem : newBasket
            }
        default:
            return state
    }
}