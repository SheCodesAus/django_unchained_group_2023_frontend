//Hooks

//Pages

//Components
import { useState } from "react";
import AddCollectionForm from "../../components/AddCollectionForm/AddCollectionForm";

//CSS
import "./AddCollection.css";
import { useNavigate, useParams } from "react-router-dom";

function AddCollection(props) {
  const authToken = window.localStorage.getItem("token");
  const [collection, setCollection] = useState({
    collection_name: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (id, value) => {
    setCollection((prevCollection) => ({ ...prevCollection, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authToken = window.localStorage.getItem("token");

    if (authToken) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}collection-list/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${authToken}`,
            },
            body: JSON.stringify(collection),
          }
        );
        if (!response.ok) {
          throw new Error(await response.text());
        }
        // navigate(`/project/${project.id}`)
        navigate("/dashboard");
      } catch (err) {
        console.error(err);
        alert(`Error: ${err.message}`);
      }
    } else {
      navigate(`/login`);
    }
  };

  return (
    <div>
      {authToken ? (
        <AddCollectionForm
          onChange={handleChange}
          onSubmit={handleSubmit}
          collection={collection}
          label="create collection"
        />
      ) : (
        <div>
          <h3>Uh oh!</h3>
          <p>
            You'll have to <Link to="/login">log in</Link> or{" "}
            <Link to="/register">register</Link> to create a collection.
          </p>
        </div>
      )}
    </div>
  );
}

export default AddCollection;
