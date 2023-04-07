//Hooks
import { useState, useEffect } from "react";
import {
  useNavigate,
  useOutlet,
  useOutletContext,
  useParams,
} from "react-router-dom";

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
  const navigate = useNavigate();

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

  //2 functions: if user logged in, check favourites list compared to product list (check heart icon). 2nd function that handles click event for turning heart on and off

  return (
    <div className="product-list-wrapper">
      <h2>products</h2>
      {collectionProductList.product_collection?.length ? (
        <div id="product-list">
          {collectionProductList.product_collection?.map((product, key) => {
            return <ProductCard key={key} productData={product} />;
          })}{" "}
        </div>
      ) : (
        <div className="back-up-text">
          you haven't added any products to this collection yet!{" "}
        </div>
      )}
      <a href={`/${id}/add-product`} className="add-button">
        +
      </a>
      {/* <AddProductForm collectionId={collectionProductList.id} /> */}
    </div>
  );
}

export default ProductList;
