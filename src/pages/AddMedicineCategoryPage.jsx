import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import AddMedicineCategoryLayer from "../components/AddMedicineCategoryLayer";

const AddMedicineCategoryPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title="Add Category" />

        {/* EmailLayer */}
        <AddMedicineCategoryLayer />
      </MasterLayout>
    </>
  );
};

export default AddMedicineCategoryPage;
