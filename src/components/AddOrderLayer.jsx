import React from "react";

const AddOrderLayer = () => {
  return (
    <div className="container mt-4">
      <div className="card bg-dark text-white p-4">
        <h6 className="mb-3">Medicine Stock Information</h6>
        <hr className="mb-2" />
        <div className="row">
          {/* Medicine Name */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Medicine Name</label>
            <select className="form-select">
              <option>Paracetamol</option>
              <option>Aspirin</option>
              <option>Ibuprofen</option>
            </select>
          </div>

          {/* Customer Name */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Customer Name</label>
            <input
              type="text"
              placeholder="Enter Customer Name"
              className="form-control"
            />
          </div>

          {/* Customer Phone */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Customer Phone</label>
            <input
              type="tel"
              placeholder="Enter Customer Phone"
              className="form-control"
            />
          </div>

          {/* Customer Email */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Customer Email</label>
            <input
              type="email"
              placeholder="Enter Customer Email"
              className="form-control"
            />
          </div>

          {/* Total Pack */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Total Pack</label>
            <input
              type="number"
              placeholder="Enter Total Pack"
              className="form-control"
            />
          </div>

          {/* Order By */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Order By</label>
            <input
              type="text"
              placeholder="Enter Order By"
              className="form-control"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="d-flex justify-content-start">
          <button className="btn btn-primary mt-3">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default AddOrderLayer;
