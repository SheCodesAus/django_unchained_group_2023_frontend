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
  // const [sortedProductList, setSortedProductList] = useState([]);
  const [collectionProductList, setCollectionProductList] = useState({
    products: [],
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const getProducts = () => {
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
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = () => {
    getProducts();
  };

  const sortProductList = () => {
    const sortedList = [...collectionProductList.product_collection].sort(
      (a, b) => a.product_price - b.product_price
    );
    setCollectionProductList({
      product_collection: sortedList,
      collection_name: collectionProductList.collection_name,
    });
  };

  return (
    <div className="product-list-wrapper">
      <div className="product-list-header">
        <h2>
          products{" "}
          <span className="product-list-collection">
            {" "}
            in collection: {collectionProductList.collection_name}
          </span>
        </h2>
        {collectionProductList.product_collection?.length ? (
          <button onClick={sortProductList} className="sort-product-button">
            sort ↓ to ↑
          </button>
        ) : (
          ""
        )}
      </div>
      {collectionProductList.product_collection?.length ? (
        <div id="product-list">
          {collectionProductList.product_collection?.map((product, key) => {
            return (
              <ProductCard
                key={key}
                productData={product}
                handleDelete={handleDelete}
              />
            );
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
