import useFetch from "../useFetch";

const TopProducts = () => {
    const { error, isPending, data: products } = useFetch('http://localhost:5000/products/allProducts')

    return (
        <div className="top-sales box">
        <div className="title">Top Selling Product</div>
        <h3>( What's Trending This Week )</h3>
        {products.slice(0,10).map(product => (
            <ul className="top-sales-details"  key={product._id} >
                <li>
                    <a href="#">
                        <img src={product.imageurl} alt=""/>
                        <span className="product">{product.productName}</span>
                    </a>
                    <span className="price">Rs. {product.price}</span>
                </li>
            </ul>
            ))}
      </div>
    );
}
 
export default TopProducts;