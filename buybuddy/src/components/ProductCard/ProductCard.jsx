import { Link } from "react-router-dom";
import { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faMessage,
  faLink,
  faTrash,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

//CSS
import "./ProductCard.css";

import Modal from "../Modal/Modal";

const notesIcon = <FontAwesomeIcon icon={faMessage} />;
const linkIcon = <FontAwesomeIcon icon={faLink} />;
const deleteIcon = <FontAwesomeIcon icon={faTrash} />;
const editIcon = <FontAwesomeIcon icon={faPen} />;
const heartIcon = <FontAwesomeIcon icon={faHeart} />;

function ProductCard(props) {
  const [modal, setModal] = useState(false);
  const { productData } = props;

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="product-card-wrapper">
      <div>
        <img className="image_url" img src={productData.image_url}></img>
        <img className="image_upload" img src={productData.image_upload}></img>
        <p className="model">{productData.product_name}</p>
        <p className="brand">{productData.product_brand}</p>
        <p className="price">${productData.product_price}</p>
        {/* <p className="heart-icon">{heartIcon}</p> */}
      </div>
      <ul>
        <li className="product-card-icon">
          <a
            href="#"
            className="btn-modal"
            onClick={() => {
              setModal(true);
            }}
          >
            {notesIcon}
          </a>
        </li>
        <li className="product-card-icon">
          <a href={productData.product_url} target="_blank">
            {linkIcon}
          </a>
        </li>
        <li className="product-card-icon">{editIcon}</li>
        <li className="product-card-icon">{deleteIcon}</li>
        <li className="product-card-icon">{heartIcon}</li>
      </ul>
      {modal && (
        <Modal notes={productData.additional_notes} closeModal={setModal} />
      )}

      {/* {modal && (
        <div>
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <div className="title">Additional Notes</div>
                <button className="close-modal" onClick={toggleModal}>
                  &times;
                </button>
              </div>
              <div className="modal-body">{productData.additional_notes}</div>
            </div>
          </div>
          <div className="overlay" onClick={toggleModal}></div>
        </div>
      )} */}
    </div>
  );
}

export default ProductCard;
