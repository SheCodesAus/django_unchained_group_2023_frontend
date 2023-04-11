import React from "react";
// import { useState } from "react";
// import { useNavigate, useParams, Link } from "react-router-dom";
import Button from "../Button/Button";

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
        <h2>create a collection</h2>
        <div className="form-item">
          <input
            type="text"
            id="collection_name"
            name="collection_name"
            required="required"
            onChange={handleChange}
            value={props.collection.collection_name}
          />
          <label htmlFor="collection_name">
            <span>collection name</span>
          </label>
        </div>
        <Button
          type="submit"
          handleClick={props.onSubmit}
          label={props.label}
        />
      </form>
    </div>
  );
}

export default AddCollectionForm;
