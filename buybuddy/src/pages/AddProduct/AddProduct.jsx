//Hooks
import { useParams } from "react-router-dom";

//Pages

//Components
import AddProductForm from "../../components/AddProductForm/AddProductForm";

//CSS
import "./AddProduct.css";

function AddProduct() {
  const { id } = useParams();
  return (
    <div>
      <AddProductForm collectionId={id} />
    </div>
  );
}

export default AddProduct;
