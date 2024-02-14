const Card = ({product}) => {
    
    
    console.log(product)
    return (
        <div className="w-6/12">
            
                
                <h1 className="my-6 mr-8 text-xl font-bold text-gray-500">{product.title}</h1>
                <img src={product.imageUrl} className="size-4/5"/>
        </div>
    )
}

export default Card;