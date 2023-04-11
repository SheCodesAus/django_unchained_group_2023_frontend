import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import ShoppingListItem from "../../components/ShoppingListItem/ShoppingListItem";
import "./ShoppingList.css";

function ShoppingList() {
  const authToken = window.localStorage.getItem("token");

  const [shoppingList, setShoppingList] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}favourites/`, {
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
        setShoppingList(data);
      });
  }, []);

  const total = shoppingList
    .map((item) => item.product_price)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="shopping-list-wrapper">
      <h2>Your shopping list</h2>
      {shoppingList.length ? (
        <div id="shopping-list">
          {shoppingList.map((product, key) => {
            return <ShoppingListItem key={key} productData={product} />;
          })}{" "}
          <div className="shopping-list-total">total: ${total}</div>
        </div>
      ) : (
        <div className="profile-wrapper-empty">
          <h2>Oh no!</h2>
          <p>
            You haven't added any products to your shopping list. Go to your{" "}
            <Link to="/dashboard">dashboard</Link> to explore.
          </p>
        </div>
      )}
    </div>
  );
}

export default ShoppingList;
