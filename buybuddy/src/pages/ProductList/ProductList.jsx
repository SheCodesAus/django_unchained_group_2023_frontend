//Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Pages

//Components
import ProductCard from "../../components/ProductCard/ProductCard";

//CSS
import "./ProductList.css";

function ProductList() {
  const authToken = window.localStorage.getItem("token");
  const [collectionProductList, setCollectionProductList] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}collection-detail/${id}`, {
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
        setCollectionProductList(data);
      });
  }, []);

  return (
    <div>
      <h1>This is the Product List</h1>
      <div id="product-list">
        {collectionProductList.product_collection?.map((product, key) => {
          return <ProductCard key={key} productData={product} />;
        })}
      </div>
    </div>
  );
}

export default ProductList;
