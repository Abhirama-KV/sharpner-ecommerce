import CartContext from "./store/CartContext";
import { useContext, useRef, useState } from "react";

const Cart = () => {
    const [inputValue,setInputValue] = useState(0)
    
    const cartCtx = useContext(CartContext);
    

    const addItemHandler = (item)=> {
        cartCtx.addItem({...item,amount:+inputValue})
        // console.log({...item,amount:inputRef.current.value})
        console.log(inputValue)
    }

    const removeItemHandler = (title)=> {
        cartCtx.removeItem(title)
    }

    return (
        <div className="h-screen bg-white fixed right-0 top-16 w-5/12 overflow-y-auto">

            <h1 className="font-bold text-4xl text-center mt-12">CART</h1>

            <div className="grid grid-flow-col my-8 mx-4  ">

                <div className="col-span-4   mx-1 ">
                    <h1 className="font-bold text-2xl border ">ITEM</h1>

                </div>

                <div className="col-span-4 borde mx-1">
                    <h1 className="font-bold text-2xl border ">PRICE</h1>

                </div>

                <div className="col-span-4 border mx-1">
                    <h1 className="font-bold text-2xl border ">QUANTITY</h1>
                </div>
                <hr className=""/>
            </div>

            
                {cartCtx.items.map(item => 
                        <div className="flex mx-2">
                            <div className="flex my-2 w-4/12">
                                <img className=" mx-2 size-8" src={item.imageUrl}/>
                                <span>{item.title}</span>
                            </div>
                            <div className=" my-2 w-4/12">
                                <div>{+item.price * +item.amount}</div>
                            </div>
                            <div className="flex my-2 w-4/12 -mx-8">
                                <input onChange={(e)=>setInputValue(e.target.value)} type="number" className="border border-black size-8 mx-4 my-1 " defaultValue={1} />
                                <button onClick={()=>addItemHandler(item)} className="bg-red-700 p-2 text-white mx-1">Add</button>
                                <button onClick={()=>removeItemHandler(item.title)} className="bg-red-700 p-2 text-white ">Remove</button>
                            </div>

                            
                        </div>)}

                        <div className="ml-[70%] flex text-2xl"><h1 className="font-bold">Total: </h1><span>${cartCtx.total}</span></div>
                        <div className="ml-[30%] cursor-pointer text-white bg-blue-600 w-4/12 my-4 p-4 rounded md">Purchase</div>

        </div>
    )
}

export default Cart;