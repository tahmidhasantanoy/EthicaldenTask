import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import AddMedicineStockLayer from "../components/AddMedicineStockLayer";

const AddMedicineStockPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title="Add Medicine Stock" />

        {/* EmailLayer */}
        <AddMedicineStockLayer />
      </MasterLayout>
    </>
  );
};

export default AddMedicineStockPage;
