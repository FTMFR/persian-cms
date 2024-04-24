import React, { useEffect, useState } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import "./comments.css";
import "../../css/cms.css";
import EditModal from "../EditModal/EditModal";

const Comments = () => {
  const [allComments, setAllComments] = useState([]);
  const [commentID, setCommentID] = useState("");
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowAcceptModal, setIsShowAcceptModal] = useState(false);
  const [isShowRejectModal, setIsShowRejectModal] = useState(false);
  const [commentIDApi, setCommentIDApi] = useState(null);

  useEffect(() => {
    getAllComments();
  }, []);

  function getAllComments() {
    fetch(`http://localhost:8000/api/comments`, { method: "GET" })
      .then((res) => res.json())
      .then((results) => setAllComments(results));
  }

  const closeDetailModal = () => {
    setIsShowDetailModal(false);
  };

  const cancleAction = () => {
    setIsShowDetailModal(false);
  };

  const closEditModal = () => {
    setIsShowEditModal(false);
  };

  const closeAcceptModal = () => {
    setIsShowAcceptModal(false);
  };

  const closeRejectModal = () => {
    setIsShowRejectModal(false);
  };

  const rejectModal = () => {
    console.log("کامنت رد شد");

    fetch(`http://localhost:8000/api/comments/reject/${commentIDApi}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowRejectModal(false);
        getAllComments();
      });
  };

  const submitAcceptModal = () => {
    console.log("کامنت تایید شد");

    fetch(`http://localhost:8000/api/comments/accept/${commentIDApi}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowAcceptModal(false);
        getAllComments();
      });

    setIsShowAcceptModal(false);
  };

  const submitAction = () => {
    fetch(`http://localhost:8000/api/comments/${commentIDApi}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowDeleteModal(false);
        getAllComments();
      });
  };

  const submitEditModal = (e) => {
    e.preventDefault();
    console.log("کامنت آپدیت شد");

    fetch(`http://localhost:8000/api/comments/${commentIDApi}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        body: commentID,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowEditModal(false);
        getAllComments();
      });
  };

  return (
    <div className="cms-main">
      <h1 className="cms-title">لیست کامنت ها</h1>
      {allComments.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>اسم کاربر</th>
              <th>محصول</th>
              <th>متن کامنت</th>
              <th>تاریخ ثبت</th>
              <th>ساعت ثبت</th>
            </tr>
          </thead>

          <tbody>
            {allComments.map((comment) => (
              <tr key={comment.id}>
                <th>{comment.userID}</th>
                <th>{comment.productId}</th>
                <td>
                  <button
                    onClick={() => {
                      setCommentID(comment.body);
                      console.log(commentID);
                      setIsShowDetailModal(true);
                    }}
                  >
                    دیدن متن
                  </button>
                </td>
                <th>{comment.date}</th>
                <th>{comment.hour}</th>
                <td>
                  <button
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setCommentIDApi(comment.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    onClick={() => {
                      setIsShowEditModal(true);
                      setCommentID(comment.body);
                      setCommentIDApi(comment.id);
                    }}
                  >
                    ویرایش
                  </button>
                  <button>پاسخ</button>
                  {comment.isAccept === 0 ? (
                    <button
                      onClick={() => {
                        setIsShowAcceptModal(true);
                        setCommentIDApi(comment.id);
                      }}
                    >
                      تایید
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setIsShowAcceptModal(true);
                        setCommentIDApi(comment.id);
                      }}
                    >
                      رد
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg={"هیج کامنتی دریافت نشد."} />
      )}

      {isShowDetailModal && (
        <DetailsModal onHide={closeDetailModal}>
          <p className="text-modal">{commentID}</p>
          <button className="text-modal-close-btn" onClick={closeDetailModal}>
            بستن
          </button>
        </DetailsModal>
      )}
      {isShowDeleteModal && (
        <DeleteModal submit={submitAction} cancle={cancleAction} title='آیا از حذف کامنت اطمینان دارید؟' />
      )}
      {isShowEditModal && (
        <EditModal onClose={closEditModal} onSubmit={submitEditModal}>
          <textarea
            cols="30"
            rows="10"
            value={commentID}
            onChange={(e) => setCommentID(e.target.value)}
          />
        </EditModal>
      )}
      {isShowAcceptModal && (
        <DeleteModal
          title="آیا از تایید اطمینان دارید؟"
          cancle={closeAcceptModal}
          submit={submitAcceptModal}
        />
      )}
      {isShowRejectModal && (
        <DeleteModal
          title="آیا از رد اطمینان دارید؟"
          cancle={closeRejectModal}
          submit={rejectModal}
        />
      )}
    </div>
  );
};

export default Comments;
