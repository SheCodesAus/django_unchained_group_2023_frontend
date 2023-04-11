import { Link } from "react-router-dom";

//CSS
import "./CollectionCard.css";

function CollectionCard(props) {
  const { collectionData } = props;

  return (
    <div className="collection-card-wrapper">
      <Link to={`/${collectionData.id}/products`}>
        <h3>{collectionData.collection_name}</h3>
      </Link>
    </div>
  );
}

export default CollectionCard;
