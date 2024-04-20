import React, { useEffect } from "react";
import "./detailsModal.css";

const DetailsModal = ({ onHide, children }) => {
  useEffect(() => {
    const checkKey = (e) => {
      console.log(e);
      if (e.keyCode === 27) {
        onHide();
      }
    };

    window.addEventListener("keydown", checkKey);

    return () => window.removeEventListener("keydown", checkKey);
  });

  return (
    <div className="modal-parent active">
      <div className="details-modal ">
       {children}
      </div>
    </div>
  );
};

export default DetailsModal;
