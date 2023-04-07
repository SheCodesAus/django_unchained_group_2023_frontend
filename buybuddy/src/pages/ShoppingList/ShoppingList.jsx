// //Hooks
// import { useEffect, useState } from "react";
// import { useOutletContext, useParams } from "react-router-dom";

// //Pages

// //Components

// //CSS
// import "./ShoppingList.css";

// function ShoppingList() {
//   // const [user, setUser] = useState();
//   const { user } = useOutletContext;
//   const authToken = window.localStorage.getItem("token");
//   const { id } = useParams();

//   // useEffect(() => {
//   //   fetch(`${import.meta.env.VITE_API_URL}users/${id}`)
//   //     .then((results) => {
//   //       console.log(results);
//   //       return results.json();
//   //     })
//   //     .then((data) => {});
//   // }, []);

//   return (
//     <div>
//       <h1>{user.username}</h1>
//     </div>
//   );
// }

// export default ShoppingList;

import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

async function getProduct(id) {
  return fetch(`${import.meta.env.VITE_API_URL}product-detail/${id}`).then(
    (results) => {
      return results.json();
    }
  );
}

function ShoppingList() {
  const [products, setProducts] = useState([]);
  const { user } = useOutletContext();

  useEffect(() => {
    if (!user) {
      return;
    }
    Promise.all(
      user.my_favourites.map(async (productId) => {
        return await getProduct(productId).catch((err) => console.error(err));
      })
    ).then((my_favourites) => setProducts(my_favourites));
  }, [user]);

  return (
    <div className="profile-wrapper">
      <h2>Your shopping list</h2>
      {products.length ? (
        <div id="product-list">
          {products.map((product, key) => {
            return <ProductCard key={key} productData={product} />;
          })}{" "}
        </div>
      ) : (
        <div className="profile-wrapper-empty">
          <h2>Oh no!</h2>
          <p>
            You haven't added any products to your shopping list. Go to your{" "}
            <Link to="/dashboard">Dashboard</Link> to explore.
          </p>
        </div>
      )}
    </div>
  );
}

export default ShoppingList;
