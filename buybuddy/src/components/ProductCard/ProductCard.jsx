import { Link, useOutletContext, useParams } from "react-router-dom";
import { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faMessage,
  faLink,
  faTrash,
  faPen,
  faHeart as fasHeart,
} from "@fortawesome/free-solid-svg-icons";

//CSS
import "./ProductCard.css";

import Modal from "../Modal/Modal";

const notesIcon = <FontAwesomeIcon icon={faMessage} />;
const linkIcon = <FontAwesomeIcon icon={faLink} />;
const deleteIcon = <FontAwesomeIcon icon={faTrash} />;
const editIcon = <FontAwesomeIcon icon={faPen} />;
const heartIcon = <FontAwesomeIcon icon={farHeart} />;
const favouritedIcon = <FontAwesomeIcon icon={fasHeart} color="#fa9fc5" />;

function ProductCard(props) {
  const [modal, setModal] = useState(false);
  const [favourite, setFavourite] = useState();
  const { productData } = props;

  const { user } = useOutletContext();

  const { id } = useParams();

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const addToFavourites = (event) => {
    const authToken = window.localStorage.getItem("token");

    fetch(`${import.meta.env.VITE_API_URL}users/${id}/favourites/`, {
      method: "post",
      headers: {
        Authorization: `Token ${authToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response);
          throw new Error("something went wrong");
        }
        setFavourite(true);
      })
      .catch(
        (e) => {
          console.log(e);
        },
        [user]
      );
  };

  return (
    <div className="product-card-wrapper">
      <div>
        <img src={productData.image_url}></img>
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
        {favourite ? (
          <span>
            <li className="product-card-icon favourited-icon">
              {favouritedIcon}
            </li>
          </span>
        ) : (
          <span>
            <li
              className="product-card-icon favourite-icon"
              onClick={addToFavourites}
            >
              {heartIcon}
            </li>
          </span>
        )}
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
