import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import AddMedicineLayer from "../components/AddMedicineLayer";

const AddMedicinePage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title="Add Category" />

        {/* EmailLayer */}
        <AddMedicineLayer />
      </MasterLayout>
    </>
  );
};

export default AddMedicinePage;
