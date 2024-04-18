import React, { useEffect } from "react";
import "./detailsModal.css";

const DetailsModal = ({ onHide }) => {
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
        <table className="cms-table">
          <thead>
            <tr>
              <th>اسم</th>
              <th>قیمت</th>
              <th>محبوبیت</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>لپتاپ</td>
              <td>12 میلیون تومان</td>
              <td>91</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailsModal;
