import React from "react";
import "./deleteModal.css";
import ReactDOM from "react-dom";

const DeleteModal = ({ submit, cancle, title }) => {
  return ReactDOM.createPortal(
    <div className="modal-parent active">
      <div className="delete-modal">
        <h1>{title}</h1>
        <div className="delete-modal-btn">
          <button
            className="delete-btn delete-modal-accept-btn"
            onClick={() => submit()}
          >
            بله
          </button>
          <button
            className="delete-btn delete-modal-reject-btn"
            onClick={() => cancle()}
          >
            خیر
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
};

export default DeleteModal;
