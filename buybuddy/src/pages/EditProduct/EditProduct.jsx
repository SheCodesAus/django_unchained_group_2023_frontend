//Hooks
import { useParams } from "react-router-dom";

//Pages

//Components
import EditProductForm from "../../components/EditProductForm/EditProductForm";

//CSS
import "./EditProduct.css";

function EditProduct() {
  const { id } = useParams();
  return (
    <div>
      <EditProductForm productId={id} />
    </div>
  );
}

export default EditProduct;
