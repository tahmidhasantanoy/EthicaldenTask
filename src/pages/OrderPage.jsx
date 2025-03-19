import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import LowStockLayer from "../components/LowStockLayer";
import OrderLayer from "../components/OrderLayer";

const OrderPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title="Order" />

        {/* EmailLayer */}
        <OrderLayer />
      </MasterLayout>
    </>
  );
};

export default OrderPage;
