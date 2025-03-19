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
          {/* <Link
            to="/"
            className="d-flex align-items-center gap-1 hover-text-primary"
          >

            Dashboard
          </Link> */}

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
          ) : (
            ""
          )}
        </li>
        {/* <li className="fw-medium">{title}</li> */}
      </ul>
    </div>
  );
};

export default Breadcrumb;
