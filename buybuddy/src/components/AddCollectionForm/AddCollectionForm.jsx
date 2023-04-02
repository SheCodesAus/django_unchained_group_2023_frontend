import React from "react";
// import { useState } from "react";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import Button from "../Button/button";

//CSS
import "./AddCollectionForm.css";

function AddCollectionForm(props) {
  const handleChange = (event) => {
    const { id, value } = event.target;
    props.onChange(id, value);
  };

  return (
    <div className="form-wrapper">
      <form>
        <h2>Create A Collection</h2>
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
