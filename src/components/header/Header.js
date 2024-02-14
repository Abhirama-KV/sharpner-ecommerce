const Header = () => {
    return (
        <div>

            <div className="bg-black text-white flex justify-center  ">
                <span className="inline-block ml-auto mx-6 my-3 text-lg font-bold cursor-pointer">Home</span>
                <span className="inline-block mx-6 my-3 text-lg font-bold cursor-pointer">Store</span>
                <span className="inline-block mx-6 my-3 text-lg font-bold cursor-pointer">About</span>
                <button className="border border-blue-600 px-2 my-2 rounded-lg ml-auto ">cart-0</button>
            </div>

            <div className="text-center h-48 bg-gray-500">
                <h1 className="text-white text-8xl font-bold">The Generics</h1>
            </div>
        </div>
    )
}

export default Header;