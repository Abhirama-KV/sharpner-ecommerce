const { createContext } = require("react");

const CartContext = createContext({
    items:[],
    addItem:(item)=>{},
    total:0,
    removeItem:(title)=>{}
})

export default CartContext;