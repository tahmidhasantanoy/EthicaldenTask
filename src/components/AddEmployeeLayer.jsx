import React from "react";

const AddEmployeeLayer = () => {
  return (
    <div className="container mt-4">
      <div className="card bg-dark text-white p-4">
        <h6 className="mb-3">Medicine Information</h6>
        <hr className="mb-2"/>
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
            <input type="text" className="form-control" />
          </div>

          {/* Customer Phone */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Customer Phone</label>
            <input type="text" className="form-control" />
          </div>

          {/* Customer Email */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Customer Email</label>
            <input type="email" className="form-control" />
          </div>

          {/* Total Pack */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Total Pack</label>
            <input type="number" className="form-control" />
          </div>

          {/* Order By */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Order By</label>
            <select className="form-select">
              <option>Mr. Korim</option>
              <option>Mr. Hasan</option>
              <option>Mr. Rahim</option>
            </select>
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

export default AddEmployeeLayer;
