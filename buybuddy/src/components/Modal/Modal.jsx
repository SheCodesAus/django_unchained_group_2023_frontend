import "./Modal.css";

function Modal(props) {
  const { notes } = props;
  const { closeModal } = props;
  return (
    <div className="modal-background" onClick={() => closeModal(false)}>
      <div className="modal-container">
        <div className="close-button">
          <button onClick={() => closeModal(false)}>&times;</button>
        </div>
        <div className="modal-title">Additional Notes:</div>
        <div className="modal-body">{notes}</div>
      </div>
    </div>
  );
}

export default Modal;
