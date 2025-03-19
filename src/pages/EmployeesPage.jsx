import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import EmployeesLayer from "../components/EmployeesLayer";

const EmployeesPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title="Employees" />

        {/* EmailLayer */}
        <EmployeesLayer />
      </MasterLayout>
    </>
  );
};

export default EmployeesPage;
