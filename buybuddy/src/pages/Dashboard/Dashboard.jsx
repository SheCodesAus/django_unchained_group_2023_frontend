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

  const sortCollectionList = (data) => {
    console.log(data);
    const sortedList = [...data].sort((a, b) =>
      a.collection_name.localeCompare(b.collection_name)
    );
    setCollectionList(sortedList);
  };

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
        sortCollectionList(data);
      });
  }, []);

  return (
    <div className="dashboard-wrapper">
      <h2>dashboard</h2>
      <div id="collection-list">
        {collectionList.map((collection, key) => {
          return <CollectionCard key={key} collectionData={collection} />;
        })}
      </div>
      <a href="/add-collection" className="add-button">
        +
      </a>
    </div>
  );
}

export default Dashboard;
