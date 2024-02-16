
import { useContext } from "react";
import CartContext from "../store/CartContext";
import { Link } from "react-router-dom";

const Header = (props) => {
    const cartCtx = useContext(CartContext)

    return (
        <div>

            <div className="bg-black text-white flex justify-center  ">
                <Link to="/home"><span className="inline-block ml-auto mx-6 my-3 text-lg font-bold cursor-pointer">Home</span></Link>
                <Link to="/"><span className="inline-block mx-6 my-3 text-lg font-bold cursor-pointer">Store</span></Link>
                <Link to="about"><span className="inline-block mx-6 my-3 text-lg font-bold cursor-pointer">About</span></Link>
                <button onClick={() => props.show()} className="border border-blue-600 px-2 my-2 rounded-lg ml-auto ">cart-{cartCtx.items.length}</button>
            </div>

            <div className="text-center h-48 bg-gray-500">
                <h1 className="text-white text-8xl font-bold">The Generics</h1>
            </div>
        </div>
    )
}

export default Header;