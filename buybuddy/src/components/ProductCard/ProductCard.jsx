import { Link } from "react-router-dom";

//CSS
import "./ProductCard.css";

function ProductCard(props) {
  const { productData } = props;

  return (
    <div className="product-card-wrapper">
      <Link to={productData.product_url}>
        <img src={productData.image_url}></img>
        <p className="model">{productData.product_name}</p>
        <p className="brand">{productData.product_brand}</p>
        <p className="price">${productData.product_price}</p>
      </Link>
    </div>
  );
}

export default ProductCard;
