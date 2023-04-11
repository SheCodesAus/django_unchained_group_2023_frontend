import React, { useState } from "react";
import "./AddProductForm.css";
import { useNavigate, useOutletContext } from "react-router-dom";
//Hooks
//Pages
//Components
import ProductForm from "../ProductForm/ProductForm";
//CSS
function AddProductForm(props) {
  const { collectionId } = props;
  const authToken = window.localStorage.getItem("token");
  const [loggedIn] = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = async (products) => {
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
        navigate(`/${collectionId}/products`);
      } catch (err) {
        console.error(err);
        alert(`Error: ${err.message}`);
      }
    } else {
      navigate(`/login`);
    }
  };

  return (
    <ProductForm
      handleSubmit={handleSubmit}
      label="add product"
      header="add product"
    />
  );
}
export default AddProductForm;
