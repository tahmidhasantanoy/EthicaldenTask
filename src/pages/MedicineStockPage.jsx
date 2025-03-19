import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import MedicineStockLayer from "../components/MedicineStockLayer";

const MedicineStockPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title="Medicine Stock" />

        {/* EmailLayer */}
        <MedicineStockLayer />
      </MasterLayout>
    </>
  );
};

export default MedicineStockPage;
