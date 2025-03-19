import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ChatMessageLayer from "../components/CustomersLayer";


const CustomersPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Customers" />

        {/* ChatMessageLayer */}
        <ChatMessageLayer />


      </MasterLayout>
    </>
  );
};

export default CustomersPage;
