import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";
const Breadcrumb = ({ title }) => {
  console.log(title);
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
      <h6 className="fw-semibold mb-0">
        {title === "Dashboard" ? title : `${title} List`}
      </h6>
      <ul className="d-flex align-items-center gap-2">
        <li className="fw-medium">
          {title === "Dashboard" ||
          title === "Customers" ||
          title === "Medicine List" ? (
            ""
          ) : title === "Employees" ? (
            <Link to={`add-employee`}>
              <button className="btn btn-primary text-white rounded-md">
                + Add New Employee
              </button>
            </Link>
          ) : title === "Medicine Category" ? (
            <Link to={`add-medicine-category`}>
              <button className="btn btn-primary text-white rounded-md">
                + Add New Category
              </button>
            </Link>
          ) : title === "Medicines" ? (
            <Link to={`add-medicine`}>
              <button className="btn btn-primary text-white rounded-md">
                + Add New Medicine
              </button>
            </Link>
          ) : title === "Medicine Stock" ? (
            <Link to={`add-medicine-stock`}>
              <button className="btn btn-primary text-white rounded-md">
                + Add New Stock
              </button>
            </Link>
          ) : title === "Order" ? (
            <Link to={`add-order`}>
              <button className="btn btn-primary text-white rounded-md">
                + Add New Order
              </button>
            </Link>
          ) : title === "Add Employee" ? (
            <div className="d-flex align-items-center gap-2">
              <Link
                to={`/dashboard`}
                className="dashboard-link d-flex align-items-center gap-1"
              >
                <Icon
                  icon="solar:home-smile-angle-outline"
                  className="menu-icon"
                />
                <span>Dashboard</span>
              </Link>
              <span className="fw-medium">-</span>
              <span className="fw-medium">{title}</span>
            </div>
          ) : title === "Add Category" ? (
            <div className="d-flex align-items-center gap-2">
              <Link
                to={`/dashboard`}
                className="dashboard-link d-flex align-items-center gap-1"
              >
                <Icon
                  icon="solar:home-smile-angle-outline"
                  className="menu-icon"
                />
                <span>Dashboard</span>
              </Link>
              <span className="fw-medium">-</span>
              <span className="fw-medium">{title}</span>
            </div>
          ) : title === "Add Medicine" ? (
            <div className="d-flex align-items-center gap-2">
              <Link
                to={`/dashboard`}
                className="dashboard-link d-flex align-items-center gap-1"
              >
                <Icon
                  icon="solar:home-smile-angle-outline"
                  className="menu-icon"
                />
                <span>Dashboard</span>
              </Link>
              <span className="fw-medium">-</span>
              <span className="fw-medium">{title}</span>
            </div>
          ) : title === "Add Medicine Stock" ? (
            <div className="d-flex align-items-center gap-2">
              <Link
                to={`/dashboard`}
                className="dashboard-link d-flex align-items-center gap-1"
              >
                <Icon
                  icon="solar:home-smile-angle-outline"
                  className="menu-icon"
                />
                <span>Dashboard</span>
              </Link>
              <span className="fw-medium">-</span>
              <span className="fw-medium">{title}</span>
            </div>
          ) : title === "Add Order" ? (
            <div className="d-flex align-items-center gap-2">
              <Link
                to={`/dashboard`}
                className="dashboard-link d-flex align-items-center gap-1"
              >
                <Icon
                  icon="solar:home-smile-angle-outline"
                  className="menu-icon"
                />
                <span>Dashboard</span>
              </Link>
              <span className="fw-medium">-</span>
              <span className="fw-medium">{title}</span>
            </div>
          ) : (
            ""
          )}
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
