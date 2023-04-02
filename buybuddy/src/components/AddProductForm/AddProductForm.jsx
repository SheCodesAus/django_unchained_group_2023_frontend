import React from "react";
import Button from "../Button/button";
import "./AddProductForm.css";
//Hooks
//Pages
//Components
//CSS
function AddProductForm(props) {
  const handleChange = (event) => {
    const { id, value } = event.target;
    props.onChange(id, value);
  };

  return (
    <div>
      <form className="form-wrapper">
        <h2>Add a product</h2>
        <div className="form-item">
          <input
            type="text"
            id="brand"
            name="brand"
            required="required"
            onChange={handleChange}
            value=""
          />
          <label htmlFor="brand">
            <span>Brand</span>
          </label>
        </div>
        <div className="form-item">
          <input
            type="text"
            id="title"
            name="title"
            required="required"
            onChange={handleChange}
            value=""
          />
          <label htmlFor="title">
            <span>Title</span>
          </label>
        </div>
        <div className="form-item">
          <input
            type="url"
            id="image"
            name="image"
            required="required"
            onChange={handleChange}
            value=""
          />
          <label htmlFor="image">
            <span>Image URL</span>
          </label>
        </div>
        <div className="form-item">
          <input
            type="url"
            id="product-link"
            name="product-link"
            required="required"
            onChange={handleChange}
            value=""
          />
          <label htmlFor="product-link">
            <span>Product Link</span>
          </label>
        </div>
        <div className="form-item">
          <input
            type="number"
            id="price"
            name="price"
            required="required"
            onChange={handleChange}
            value=""
          />
          <label htmlFor="price">
            <span>Price</span>
          </label>
        </div>

        <div className="form-item">
          <input
            type="text"
            id="notes"
            name="notes"
            required="required"
            onChange={handleChange}
            value=""
          />
          <label htmlFor="notes">
            <span>Additional Notes</span>
          </label>
        </div>
        <Button
          type="submit"
          handleClick={props.onSubmit}
          label="Add Product"
        />
      </form>
    </div>
  );
}
export default AddProductForm;
