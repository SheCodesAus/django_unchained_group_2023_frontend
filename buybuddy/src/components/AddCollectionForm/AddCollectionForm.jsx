import React from "react";
// import { useState } from "react";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import Button from "../Button/button";

//CSS
import "./AddCollectionForm.css";
import "../StyleForms.css";



function AddCollectionForm(props) {
  const handleChange = (event) => {
    const { id, value } = event.target;
    props.onChange(id, value);
  };
    
  return (
      <div className="addcollection-form-wrapper">
        <div>This is the Add Collection Form</div>
        <p>
          What are you shopping for?
        </p>
        <form>
          <div className="form-item">
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              required="required"
            />
            <label htmlFor="name">
              <span>Collection Name</span>
            </label>
          </div>
          <button type="submit">Create Collection</button>
        </form>
      </div>
    ); 
}

export default AddCollectionForm;



