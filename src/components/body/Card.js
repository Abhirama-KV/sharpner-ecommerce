import { useContext } from "react";
import CartContext from "../store/CartContext";

const Card = ({product}) => {
    const cartCtx = useContext(CartContext)
    
    const handleAddToCart = ()=>{
        cartCtx.addItem({
            title:product.title,
            price:+product.price,
            imageUrl:product.imageUrl,
            amount:1
        })
        console.log(cartCtx.items);
    }

   

    return (
        <div className="w-6/12 mt-4 h-96">
            
                
                <h1 className="my-6 mr-8 text-xl font-bold text-gray-500">{product.title}</h1>
                <img src={product.imageUrl} className="size-4/5"/>
                <div className="flex justify-between w-4/5 mb-12 mt-1">
                    <h1>${product.price}</h1>
                    <button onClick={handleAddToCart} className="border border-red-500 rounded-md bg-blue-400 text-white font-bold ">ADD TO CART</button>
                </div>
        </div>
    )
}

export default Card;