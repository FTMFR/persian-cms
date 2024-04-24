import React, { useEffect, useState } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";
import "./users.css";
import DetailsModal from "../DetailsModal/DetailsModal";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isShowDeleteModal, SetIsShowDeleteModal] = useState(false);
  const [isShowEditModal, SetIsShowEditModal] = useState(false);
  const [isShowDetailModal, SetIsShowDetailModal] = useState(false);
  const [mainUserId, setMainUserId] = useState(null);
  const [mainUserInfo, setMainUserInfo] = useState({});

  const [userNewFirstname, setUserNewFirstname] = useState("");
  const [userNewLastname, setUserNewLastname] = useState("");
  const [userNewUsername, setUserNewUsername] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");
  const [userNewPhone, setUserNewPhone] = useState("");
  const [userNewCity, setUserNewCity] = useState("");
  const [userNewEmail, setUserNewEmail] = useState("");
  const [userNewAddress, setUserNewAddress] = useState("");
  const [userNewBuy, setUserNewBuy] = useState("");
  const [userNewScore, setUserNewScore] = useState("");

  useEffect(() => {
    getAllUser();
  }, []);

  function getAllUser() {
    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then((result) => setUsers(result));
  }

  const closeDeleteModal = () => {
    SetIsShowDeleteModal(false);
  };

  const closeEditModal = () => {
    SetIsShowEditModal(false);
  };

  const closeDetailsModal = () => {
    SetIsShowDetailModal(false);
  };

  const submitEditModal = (e) => {
    e.preventDefault();
    console.log("کاربر مورد نظر آپدیت شد.");

    const userNewInfos = {
      firsname: userNewFirstname,
      lastname: userNewLastname,
      username: userNewUsername,
      password: userNewPassword,
      phone: userNewPhone,
      city: userNewCity,
      email: userNewEmail,
      address: userNewAddress,
      score: userNewScore,
      buy: userNewBuy,
    };

    fetch(`http://localhost:8000/api/users/${mainUserId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userNewInfos),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        SetIsShowEditModal(false);
        getAllUser();
      });

    SetIsShowEditModal(false);
  };

  const removeUser = () => {
    console.log("کاربر ریمو شد.");
    fetch(`http://localhost:8000/api/users/${mainUserId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        SetIsShowDeleteModal(false);
        getAllUser();
      });
  };

  return (
    <>
      <div className="cms-main">
        <h1>لیست کاربران</h1>
        {users ? (
          <table className="cms-table">
            <thead>
              <tr>
                <th> نام و نام خانوادگی</th>
                <th>نام کاربری</th>
                <th>رمز عبور</th>
                <th>شماره تماس</th>
                <th>ایمیل کاربر</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    {user.firsname} {user.lastname}
                  </td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        SetIsShowDeleteModal(true);
                        setMainUserId(user.id);
                      }}
                    >
                      حذف
                    </button>
                    <button
                      onClick={() => {
                        setMainUserInfo(user);
                        SetIsShowDetailModal(true);
                      }}
                    >
                      جزییات
                    </button>
                    <button
                      onClick={() => {
                        SetIsShowEditModal(true);
                        setMainUserId(user.id);
                        setUserNewFirstname(user.firsname);
                        setUserNewLastname(user.lastname);
                        setUserNewUsername(user.username);
                        setUserNewPassword(user.password);
                        setUserNewPhone(user.phone);
                        setUserNewAddress(user.address);
                        setUserNewCity(user.city);
                        setUserNewEmail(user.email);
                        setUserNewBuy(user.buy);
                        setUserNewScore(user.score);
                      }}
                    >
                      ویرایش
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <ErrorBox msg={"هیچ کاربری یافت نشد"} />
        )}
        {isShowDeleteModal && (
          <DeleteModal
            title="آیا از حذف اطمینان دارید؟"
            cancle={closeDeleteModal}
            submit={removeUser}
          />
        )}
        {isShowEditModal && (
          <EditModal onClose={closeEditModal} onSubmit={submitEditModal}>
            <div className="edit-modal-info-input-group">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                type="text"
                className="edit-user-info-input"
                placeholder="مقدار جدید را وارد نمایید."
                value={userNewFirstname}
                onChange={(e) => setUserNewFirstname(e.target.value)}
              />
            </div>
            <div className="edit-modal-info-input-group">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                type="text"
                className="edit-user-info-input"
                placeholder="مقدار جدید را وارد نمایید."
                value={userNewLastname}
                onChange={(e) => setUserNewLastname(e.target.value)}
              />
            </div>
            <div className="edit-modal-info-input-group">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                type="text"
                className="edit-user-info-input"
                placeholder="مقدار جدید را وارد نمایید."
                value={userNewPassword}
                onChange={(e) => setUserNewPassword(e.target.value)}
              />
            </div>
            <div className="edit-modal-info-input-group">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                type="text"
                className="edit-user-info-input"
                placeholder="مقدار جدید را وارد نمایید."
                value={userNewPhone}
                onChange={(e) => setUserNewPhone(e.target.value)}
              />
            </div>
            <div className="edit-modal-info-input-group">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                type="text"
                className="edit-user-info-input"
                placeholder="مقدار جدید را وارد نمایید."
                value={userNewPassword}
                onChange={(e) => setUserNewPassword(e.target.value)}
              />
            </div>
            <div className="edit-modal-info-input-group">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                type="text"
                className="edit-user-info-input"
                placeholder="مقدار جدید را وارد نمایید."
                value={userNewCity}
                onChange={(e) => setUserNewCity(e.target.value)}
              />
            </div>
            <div className="edit-modal-info-input-group">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                type="text"
                className="edit-user-info-input"
                placeholder="مقدار جدید را وارد نمایید."
                value={userNewEmail}
                onChange={(e) => setUserNewEmail(e.target.value)}
              />
            </div>
            <div className="edit-modal-info-input-group">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <textarea
                type="text"
                className="edit-user-info-input"
                placeholder="مقدار جدید را وارد نمایید."
                value={userNewAddress}
                onChange={(e) => setUserNewAddress(e.target.value)}
              />
            </div>
            <div className="edit-modal-info-input-group">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                type="text"
                className="edit-user-info-input"
                placeholder="مقدار جدید را وارد نمایید."
                value={userNewScore}
                onChange={(e) => setUserNewScore(e.target.value)}
              />
            </div>
            <div className="edit-modal-info-input-group">
              <span>
                <AiOutlineDollarCircle />
              </span>
              <input
                type="text"
                className="edit-user-info-input"
                placeholder="مقدار جدید را وارد نمایید."
                value={userNewBuy}
                onChange={(e) => setUserNewBuy(e.target.value)}
              />
            </div>
          </EditModal>
        )}
        {isShowDetailModal && (
          <DetailsModal onHide={closeDetailsModal}>
            <table className="cms-table">
              <thead>
                <tr>
                  <th>شهر کاربر</th>
                  <th>آدرس کاربر</th>
                  <th>امتیاز کاربر</th>
                  <th>میزان خرید کاربر</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{mainUserInfo.city}</td>
                  <td>{mainUserInfo.address}</td>
                  <td>{mainUserInfo.score}</td>
                  <td>{mainUserInfo.buy}</td>
                </tr>
              </tbody>
            </table>
          </DetailsModal>
        )}
      </div>
    </>
  );
};

export default Users;
