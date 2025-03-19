import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import EmailLayer from "../components/EmailLayer";

const EmployeesPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title="Email" />

        {/* EmailLayer */}
        <EmailLayer />
      </MasterLayout>
    </>
  );
};

export default EmployeesPage;
