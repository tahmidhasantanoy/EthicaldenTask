import React from "react";

const AddMedicineCategoryLayer = () => {
  return (
    <div className="container mt-4">
      <div className="card bg-dark text-white p-4">
        <h6 className="mb-3">Medicine Information</h6>
        <hr className="mb-2" />
        <div className="row">
          {/* Category Name */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Category Name</label>
            <input
              type="text"
              placeholder="Enter Medicine Category Name"
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

export default AddMedicineCategoryLayer;
