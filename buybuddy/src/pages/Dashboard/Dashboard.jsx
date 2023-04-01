//Hooks
import { useState, useEffect } from "react";

//Pages

//Components
import CollectionCard from "../../components/CollectionCard/CollectionCard";

//CSS
import "./Dashboard.css";

function Dashboard() {
  const authToken = window.localStorage.getItem("token");
  const [collectionList, setCollectionList] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}collection-list`, {
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
        setCollectionList(data);
      });
  }, []);

  return (
    <div>
      <h1>This is the Dashboard</h1>
      <div id="collection-list">
        {collectionList.map((collection, key) => {
          return <CollectionCard key={key} collectionData={collection} />;
        })}
      </div>
    </div>
  );
}

export default Dashboard;
