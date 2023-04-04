import React, { useState } from "react";
import Button from "../Button/button";
import "./AddProductForm.css";
import { useNavigate, useOutletContext } from "react-router-dom";
//Hooks
//Pages
//Components
//CSS
function AddProductForm(props) {
  const { collectionId } = props;
  const authToken = window.localStorage.getItem("token");
  const [loggedIn] = useOutletContext();
  const navigate = useNavigate();

  const [products, setProducts] = useState({
    product_brand: "",
    product_name: "",
    image_url: "",
    image_upload: "",
    product_url: "",
    product_price: "",
    additional_notes: "",
  });

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
    console.log(products);

    if (loggedIn) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}product-list/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${authToken}`,
            },
            body: JSON.stringify({ collection: collectionId, ...products }),
          }
        );
        if (!response.ok) {
          throw new Error(await response.text());
        }
        navigate(`/${id}/products`);
      } catch (err) {
        console.error(err);
        alert(`Error: ${err.message}`);
      }
    } else {
      navigate(`/login`);
    }
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
              type="file"
              id="image_upload"
              name="image-upload"
              required="required"
              onChange={handleChange}
              value={products.image_upload}
            />
            <label htmlFor="image-upload">
              <span>image upload</span>
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
export default AddProductForm;
