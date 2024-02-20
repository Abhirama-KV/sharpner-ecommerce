
import { useContext } from "react";
import CartContext from "../store/CartContext";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../store/firebase";

const Header = (props) => {
    const cartCtx = useContext(CartContext)
    const navigate = useNavigate()

    
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(user)
    navigate('/')
    // ...
  } else {
    // User is signed out
    // ...
  }
});

    return (
        <div>

            <div className="bg-black text-white flex  ">
                <div className="ml-auto">

                    <Link to="/home"><span className="inline-block  mx-6 my-3 text-lg font-bold cursor-pointer">Home</span></Link>
                    <Link to="/"><span className="inline-block mx-6 my-3 text-lg font-bold cursor-pointer">Store</span></Link>
                    <Link to="/about"><span className="inline-block mx-6 my-3 text-lg font-bold cursor-pointer">About</span></Link>
                    <Link to="/login"><span className="inline-block mx-6 my-3 text-lg font-bold cursor-pointer">Login</span></Link>
                </div>

                <div className="ml-auto">
                    
                    <h1 className="inline mx-4">User</h1>
                    <button onClick={() => props.show()} className="border border-blue-600 px-2 my-2 rounded-lg  ">cart-{cartCtx.items.length}</button>
                   
                    
                </div>

            </div>

            <div className="text-center h-48 bg-gray-500">
                <h1 className="text-white text-8xl font-bold">The Generics</h1>
            </div>
        </div>
    )
}

export default Header;