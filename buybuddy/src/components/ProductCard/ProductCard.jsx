import { Link } from "react-router-dom";

//CSS
import "./ProductCard.css";

function ProductCard(props) {
  const { productData } = props;
  console.log(productData);

  return (
    <div>
      <Link to={productData.product_url}>
        <img src={productData.image_url}></img>
        <h3>{productData.product_name}</h3>
      </Link>
    </div>
  );
}

export default ProductCard;
