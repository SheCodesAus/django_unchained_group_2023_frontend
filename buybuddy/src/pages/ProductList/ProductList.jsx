//Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Pages

//Components
import ProductCard from "../../components/ProductCard/ProductCard";

//CSS
import "./ProductList.css";
import AddProductForm from "../../components/AddProductForm/AddProductForm";

function ProductList() {
  const authToken = window.localStorage.getItem("token");
  const [collectionProductList, setCollectionProductList] = useState({
    products: [],
  });

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
        console.log(data);
      });
  }, []);

  return (
    <div className="product-list-wrapper">
      <h2>products</h2>
      <div id="product-list">
        {collectionProductList.product_collection?.map((product, key) => {
          return <ProductCard key={key} productData={product} />;
        })}
      </div>
      {/* <AddProductForm collectionId={collectionProductList.id} /> */}
    </div>
  );
}

export default ProductList;
