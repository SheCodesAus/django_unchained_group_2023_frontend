import React, { useState, useEffect } from "react";
import Button from "../Button/button";
import "./EditProductForm.css";
import { useNavigate, useOutletContext } from "react-router-dom";
//Hooks
//Pages
//Components
import ProductForm from "../ProductForm/ProductForm";
//CSS
function EditProductForm(props) {
  const { productId } = props;
  const authToken = window.localStorage.getItem("token");
  const [loggedIn] = useOutletContext();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      if (loggedIn) {
        try {
          fetch(`${import.meta.env.VITE_API_URL}product-detail/${productId}`, {
            method: "get",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${authToken}`,
            },
          })
            .then((results) => {
              return results.json();
            })
            .then((data) => {
              console.log(data);
              setProduct(data);
            });
        } catch (err) {
          console.error(err);
          alert(`Error: ${err.message}`);
        }
      } else {
        navigate(`/login`);
      }
    };

    getProduct();
  }, [productId]);

  const handleSubmit = async (products) => {
    if (loggedIn) {
      try {
        fetch(`${import.meta.env.VITE_API_URL}product-detail/${productId}/`, {
          method: "put",
          headers: {
            Authorization: `Token ${authToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...products, collection: product.collection }),
        })
          .then((response) => {
            if (!response.ok) {
              console.log(response);
              throw new Error("something went wrong");
            }
            return response.json();
          })
          .then((data) => navigate(`/${data.collection}/products`))
          .catch((e) => {
            console.log(e);
          });
      } catch (err) {
        console.error(err);
        alert(`Error: ${err.message}`);
      }
    } else {
      navigate(`/login`);
    }
  };

  return <ProductForm {...product} handleSubmit={handleSubmit} />;
}
export default EditProductForm;
