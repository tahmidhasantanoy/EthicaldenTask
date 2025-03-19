import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import MedicinesLayer from "../components/MedicinesLayer";

const MedicinesPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title="Employees" />

        {/* EmailLayer */}
        <MedicinesLayer />
      </MasterLayout>
    </>
  );
};

export default MedicinesPage;
