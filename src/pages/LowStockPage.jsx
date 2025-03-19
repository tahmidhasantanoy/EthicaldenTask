import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import LowStockLayer from "../components/LowStockLayer";

const LowStockPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title="Medicine Stock" />

        {/* EmailLayer */}
        <LowStockLayer />
      </MasterLayout>
    </>
  );
};

export default LowStockPage;
