import React from "react";
import "./deleteModal.css";
import ReactDOM from "react-dom";

const DeleteModal = () => {
  return ReactDOM.createPortal(
    <div className="modal-parent active">
      <div className="delete-modal">
        <h1>آیا از حذف اطمینان دارید؟</h1>
        <div className="delete-modal-btn">
          <button className="delete-btn delete-modal-accept-btn">بله</button>
          <button className="delete-btn delete-modal-reject-btn">خیر</button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
};

export default DeleteModal;
