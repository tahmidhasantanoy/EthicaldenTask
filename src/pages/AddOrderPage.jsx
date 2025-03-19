import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import AddMedicineStockLayer from "../components/AddMedicineStockLayer";

const AddOrderPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title="Add Order" />

        {/* EmailLayer */}
        <AddMedicineStockLayer />
      </MasterLayout>
    </>
  );
};

export default AddOrderPage;
