import "./cssProductCard.css";
function ProductCard({img, name, price}){
    return (
        <div className="product-card">
            <img src={img} alt={name}/>
            <h3>{name}</h3>
            <p className="price">{price}</p>
            <button id="btnAdd">Add to Cart</button>
        </div>
    )
}
export default ProductCard;