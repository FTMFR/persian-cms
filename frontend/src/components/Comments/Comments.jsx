import React from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import DeleteModal from "../DeleteModal/DeleteModal";

const Comments = () => {
  return (
    <>
      <ErrorBox msg={"هیچ کامنتی یافت نشد"} />
      <DeleteModal />
    </>
  );
};

export default Comments;
