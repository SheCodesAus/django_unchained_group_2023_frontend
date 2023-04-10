import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./ProductForm.css";
import { useNavigate, useOutletContext } from "react-router-dom";
//Hooks
//Pages
//Components
//CSS
function ProductForm(props) {
  const { collectionId } = props;
  const authToken = window.localStorage.getItem("token");
  const [loggedIn] = useOutletContext();
  const navigate = useNavigate();

  const [products, setProducts] = useState({
    product_brand: props.product_brand || "",
    product_name: props.product_name || "",
    image_url: props.image_url || "",
    product_url: props.product_url || "",
    product_price: props.product_price || 0,
    additional_notes: props.additional_notes || "",
  });

  useEffect(() => {
    setProducts({
      product_brand: props.product_brand || "",
      product_name: props.product_name || "",
      image_url: props.image_url || "",
      product_url: props.product_url || "",
      product_price: props.product_price || 0,
      additional_notes: props.additional_notes || "",
    });
  }, [
    props.product_brand,
    props.product_name,
    props.image_url,
    props.product_url,
    props.product_price,
    props.additional_notes,
  ]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    console.log(props);
    console.log(collectionId);
    setProducts((prevProducts) => ({
      ...prevProducts,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    props.handleSubmit(products);
  };

  return (
    <div>
      {loggedIn ? (
        <form className="form-wrapper">
          <h2>add a product</h2>
          <div className="form-item">
            <input
              type="text"
              id="product_brand"
              name="brand"
              required="required"
              onChange={handleChange}
              value={products.product_brand}
            />
            <label htmlFor="brand">
              <span>brand</span>
            </label>
          </div>
          <div className="form-item">
            <input
              type="text"
              id="product_name"
              name="title"
              required="required"
              onChange={handleChange}
              value={products.product_name}
            />
            <label htmlFor="title">
              <span>title</span>
            </label>
          </div>
          <div className="form-item">
            <input
              type="url"
              id="image_url"
              name="image"
              required="required"
              onChange={handleChange}
              value={products.image_url}
            />
            <label htmlFor="image">
              <span>image url</span>
            </label>
          </div>
          <div className="form-item">
            <input
              type="url"
              id="product_url"
              name="product-link"
              required="required"
              onChange={handleChange}
              value={products.product_url}
            />
            <label htmlFor="product-link">
              <span>product link</span>
            </label>
          </div>
          <div className="form-item">
            <input
              type="number"
              id="product_price"
              name="price"
              required="required"
              onChange={handleChange}
              value={products.product_price}
            />
            <label htmlFor="price">
              <span>price</span>
            </label>
          </div>

          <div className="form-item">
            <input
              type="text"
              id="additional_notes"
              name="notes"
              required="required"
              onChange={handleChange}
              value={products.additional_notes}
            />
            <label htmlFor="notes">
              <span>additional notes</span>
            </label>
          </div>
          <Button
            type="submit"
            handleClick={handleSubmit}
            label="add product"
          />
        </form>
      ) : (
        <p>
          <Link to="/login">Log in</Link> to make a pledge
        </p>
      )}
    </div>
  );
}
export default ProductForm;
