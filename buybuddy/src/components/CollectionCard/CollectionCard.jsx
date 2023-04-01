import { Link } from "react-router-dom";

//CSS
import "./CollectionCard.css";

function CollectionCard(props) {
  const { collectionData } = props;
  console.log(collectionData);

  return (
    <div>
      <Link to={`/${collectionData.id}/products`}>
        <img src="#"></img>
        <h3>{collectionData.collection_name}</h3>
        <p>{collectionData.product_collection.image_url}</p>
      </Link>
    </div>
  );
}

export default CollectionCard;
