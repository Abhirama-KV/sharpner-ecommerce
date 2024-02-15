import { Provider, useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
    items:[],
    total:0
}

const cartReducer = (state,action) => {
    if(action.type == 'ADD'){
        const index = state.items.findIndex(item=>item.title == action.item.title);
        const existingItem = state.items[index];

        let updatedItem;
        let updatedItems=[];
        let updatedTotal = state.total + action.item.amount * action.item.price;

        if(existingItem){
            updatedItem = {...existingItem,amount:existingItem.amount + action.item.amount};
            updatedItems = [...state.items];
            updatedItems[index] = updatedItem;
        }else {
            
            updatedItems = state.items.concat(action.item);
        }

        return {
            items:updatedItems,
            total:updatedTotal
        }

    }
    else if(action.type == 'REMOVE'){
        const index = state.items.findIndex(item=>item.title == action.title);
        const existingItem = state.items[index];

        // existingItem.amount -= 1;
        // let updatedItem;
        // let updatedItems=[];
        // let updatedTotal = state.total -  action.item.price;

        // if(existingItem.amount>1){
        //     updatedItems = {...existingItem,amount:existingItem.amount}
        //     updatedItems = [...state.items];
        //     updatedItems[index] = updatedItem;
        // }else{
        //     updatedItems = state.items.filter(item=>item.title !== action.title)
        // }

        let updatedItems = state.items.filter(item=>item.title !== action.title);
        let updatedTotal = state.total - existingItem.price * existingItem.amount;

        
        return {
            items:updatedItems,
            total:updatedTotal
        }

    }
}

const CartContextProvider = (props)=>{

    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState)

    const addItemToStore = (item)=>{
        dispatchCartAction({type:'ADD',item:item})
    }

    const removeItemFromStore = (title)=>{
        dispatchCartAction({type:'REMOVE',title:title})
    }

    const cartContext = {
        addItem:addItemToStore,
        removeItem:removeItemFromStore,
        total:cartState.total,
        items:cartState.items
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;