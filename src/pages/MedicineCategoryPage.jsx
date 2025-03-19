import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import MedicineCategoryLayer from "../components/MedicineCategoryLayer";

const MedicineCategoryPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title="Medicine Category" />

        {/* EmailLayer */}
        <MedicineCategoryLayer />
      </MasterLayout>
    </>
  );
};

export default MedicineCategoryPage;
