import Card from "./Card";

const Body = () => {
    const productsArr = [
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
    ]

    return (<div className="text-center ">
            <h1 className="text-6xl font-bold my-4">Music</h1>
            <div className="flex justify-center mx-auto flex-wrap w-6/12  my-8">
            
                {productsArr.map(product=><Card product={product}/>)}
            </div>

            <button className="p-2 px-4 bg-slate-800 text-blue-200 rounded-lg my-8 mr-8 font-bold text-xl">see the cart</button>
        </div>
    )
}

export default Body;