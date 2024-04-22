import React, { useEffect, useState } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import DeleteModal from "../DeleteModal/DeleteModal";
import "./comments.css";
import "../../css/cms.css";

const Comments = () => {
  const [allComments, setAllComments] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/api/comments`, { method: "GET" })
      .then((res) => res.json())
      .then((results) => setAllComments(results));
  }, []);

  return (
    <>
      {allComments.length ? (
        <div className="cms-main">
          {/* <DeleteModal /> */}
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
                  <button>دیدن متن</button>
                  <th>{comment.date}</th>
                  <th>{comment.hour}</th>
                  <td>
                    <button>حذف</button>
                    <button>ویرایش</button>
                    <button>پاسخ</button>
                    <button>تایید</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <ErrorBox msg={"هیچ کامsنتی یافت نشد"} />
      )}
    </>
  );
};

export default Comments;
