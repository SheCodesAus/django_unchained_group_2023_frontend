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
      Add you product here:
      <form>
        <div className="form-product">
          <label htmlFor="title">
            <span>Title</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required="required"
            onChange={handleChange}
            value=""
          />
        </div>
        <div className="form-product">
          <label htmlFor="image">
            <span>Image</span>
          </label>
          <input
            type="url"
            id="image"
            name="image"
            required="required"
            onChange={handleChange}
            value=""
          />
        </div>
        <div className="form-product">
          <label htmlFor="price">
            <span>Price</span>
          </label>
          <input
            type="number"
            id="price"
            name="price"
            required="required"
            onChange={handleChange}
            value=""
          />
        </div>
        <div className="form-product">
          <label htmlFor="brand">
            <span>Brand</span>
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            required="required"
            onChange={handleChange}
            value=""
          />
        </div>
        <div className="form-product">
          <label htmlFor="notes">
            <span>Notes</span>
          </label>
          <input
            type="text"
            id="notes"
            name="notes"
            required="required"
            onChange={handleChange}
            value=""
          />
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
