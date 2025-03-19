import React from "react";

const AddMedicineStockLayer = () => {
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

          {/* Brand Name */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Brand Name</label>
            <input
              type="text"
              placeholder="Enter Brand Name"
              className="form-control"
            />
          </div>

          {/* Medicine Category */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Medicine Category</label>
            <select className="form-select">
              <option>Analgesics</option>
              <option>Antibiotics</option>
              <option>Antipyretics</option>
            </select>
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

          {/* Purchase Price */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Purchase Price</label>
            <input
              type="number"
              placeholder="Enter Purchase Price"
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

export default AddMedicineStockLayer;
