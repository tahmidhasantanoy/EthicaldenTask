import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import AddEmployeeLayer from "../components/AddEmployeeLayer";

const AddEmployeePage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title="Add Employee" />

        {/* EmailLayer */}
        <AddEmployeeLayer />
      </MasterLayout>
    </>
  );
};

export default AddEmployeePage;
