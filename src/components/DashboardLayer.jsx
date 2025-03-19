import React from "react";
import UnitCountOne from "./child/UnitCountOne";
import ShortMedicineList from "./child/ShortMedicineList";
import LatestMedicine from "./child/LatestMedicine";
import LastOrder from "./child/LastOrder";

const DashboardLayer = () => {
  return (
    <>
      <UnitCountOne />

      <ShortMedicineList />

      <div className="col-xxl-12 col-xl-10">
        <div className="row">
          <div className="col-xxl-7 col-xl-7 col-lg-8 col-md-12 py-3">
            <LatestMedicine />
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-4 col-md-12 text-white p-3">
            <LastOrder />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayer;
