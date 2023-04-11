import { Link, useOutletContext, useParams } from "react-router-dom";
import { useState } from "react";

//CSS
import "./ShoppingListItem.css";

function ShoppingListItem(props) {
  const { productData } = props;
  const [isFavourite, setIsFavourite] = useState(productData.favourite);

  const { user } = useOutletContext();

  const { id } = useParams();

  return (
    <div className="shopping-list-item-wrapper">
      <img src={productData.image_url}></img>

      <a
        href={productData.product_url}
        target="_blank"
        className="shopping-list-link"
      >
        {" "}
        <span className="shopping-list-brand">
          {productData.product_brand}{" "}
        </span>
        <span className="shopping-list-model">{productData.product_name}</span>
      </a>
      <p className="shopping-list-price">${productData.product_price}</p>
      {/* <p className="heart-icon">{heartIcon}</p> */}
    </div>
  );
}

export default ShoppingListItem;
