import { useRef, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./store/firebase";

const Login = () => {
    const [isSignIn,setIsSignIn] = useState(true);
    const userRef = useRef(null);
    const passRef = useRef(null);

    const handleButton = ()=>{
        setIsSignIn(!isSignIn)
    }

    

const handleSubmitButton=(e)=>{
    e.preventDefault()
    const username = userRef.current.value;
    const password = passRef.current.value;
    console.log(username+''+password)
    if(!isSignIn){
createUserWithEmailAndPassword(auth, username, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
}else{
    
signInWithEmailAndPassword(auth, username, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}


}


    return (
        <div className=" h-screen">
            <h1>E-Commerce</h1>

            <form  className="bg-gray-600  w-4/12 m-auto my-[5%]  shadow-2xl rounded-lg">

                <h1 className="my-4 text-4xl font-bold mx-2  text-gray-950">Login</h1>

                {!isSignIn && <div className="my-2">
                    <label className="my-2 text-2xl text-gray-950 font-bold ">FullName: </label>
                    <input className=" w-full py-2 border border-gray-500" type="text" />
                </div>}

                <div className="my-2">
                    <label className="my-2 text-2xl text-gray-950 font-bold ">UserName: </label>
                    <input ref={userRef} className=" w-full py-2 border border-gray-500" type="text" />
                </div>

                <div className="my-2">
                    <label className="my-2 text-2xl text-gray-950 font-bold">Password: </label>
                    <input ref={passRef} className=" w-full py-2 border border-gray-500" type="password" />
                </div>

                {!isSignIn && <div className="my-2">
                    <label className="my-2 text-2xl text-gray-950 font-bold">Retype Password: </label>
                    <input ref={passRef} className=" w-full py-2 border border-gray-500" type="password" />
                </div>}

                <h1 onClick={handleButton} className="text-red-100 ml-[25%] cursor-pointer my-2">{isSignIn?"Don't have an account? Create Account":"Already have account?Log In"}</h1>
                <button onClick={handleSubmitButton} className="ml-[35%] text-3xl font-bold text-red-700 bg-green-500 rounded-lg p-2 my-2">{isSignIn?'Log In':'Sign Up'}</button>
            </form>

        </div>
    )
}

export default Login;