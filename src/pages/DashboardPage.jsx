import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import DashboardLayer from "../components/DashboardLayer";

const DashboardPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title="Dashboard" />

        {/* EmailLayer */}
        <DashboardLayer />
      </MasterLayout>
    </>
  );
};

export default DashboardPage;
