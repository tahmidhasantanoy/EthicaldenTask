import React from "react";
import { Icon } from "@iconify/react";
const UnitCountOne = () => {
  return (
    <div className="row row-cols-xxxl-6 row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4">
      {[
        {
          title: "Total Users",
          value: "20,000",
          icon: "gridicons:multiple-users",
          bg: "bg-cyan",
        },
        {
          title: "Total Subscription",
          value: "15,000",
          icon: "fa-solid:award",
          bg: "bg-purple",
        },
        {
          title: "Total Free Users",
          value: "5,000",
          icon: "fluent:people-20-filled",
          bg: "bg-info",
        },
        {
          title: "Total Income",
          value: "$42,000",
          icon: "solar:wallet-bold",
          bg: "bg-success-main",
        },
        {
          title: "Total Expense",
          value: "$30,000",
          icon: "fa6-solid:file-invoice-dollar",
          bg: "bg-red",
        },
        {
          title: "Active Subscriptions",
          value: "12,000",
          icon: "fa-solid:star",
          bg: "bg-orange",
        },
      ].map((item, index) => (
        <div className="col" key={index}>
          <div className="card shadow-none border bg-gradient-start h-100">
            <div className="card-body p-20 d-flex align-items-center">
              <div
                className={`w-50-px h-50-px ${item.bg} rounded-circle d-flex justify-content-center align-items-center me-3`}
              >
                <Icon icon={item.icon} className="text-white text-2xl mb-0" />
              </div>
              <div>
                <p className="fw-medium text-primary-light mb-1">
                  {item.title}
                </p>
                <h6 className="mb-0">{item.value}</h6>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UnitCountOne;
