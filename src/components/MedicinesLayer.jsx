import React, { useState } from "react";

const MedicinesLayer = () => {
  const medicinesData = [
    {
      id: "101",
      name: "Paracetamol",
      brand: "Acme",
      category: "Pain Relievers",
      price: "50",
      packSize: "10 Tablets",
      totalPack: "100",
      status: "Available",
    },
    {
      id: "102",
      name: "Amoxicillin",
      brand: "Square",
      category: "Antibiotics",
      price: "120",
      packSize: "15 Capsules",
      totalPack: "200",
      status: "Out of Stock",
    },
    {
      id: "103",
      name: "Cetirizine",
      brand: "Beximco",
      category: "Allergy Medication",
      price: "30",
      packSize: "10 Tablets",
      totalPack: "150",
      status: "Available",
    },
    {
      id: "104",
      name: "Vitamin C",
      brand: "Renata",
      category: "Vitamins & Supplements",
      price: "90",
      packSize: "20 Tablets",
      totalPack: "300",
      status: "Available",
    },
    {
      id: "105",
      name: "Cough Syrup",
      brand: "Eskayef",
      category: "Cough & Cold",
      price: "80",
      packSize: "100ml Bottle",
      totalPack: "50",
      status: "Available",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(medicinesData);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = medicinesData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="col-xxl-12 col-xl-10">
      <div className="card h-100">
        <div className="card-body p-24">
          {/* Search & Entries per Page */}
          <div className="d-flex justify-content-between align-items-center mb-16">
            <div className="d-flex align-items-center gap-2">
              <select className="form-select form-select-sm w-auto">
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
              <p className="mb-0">entries per page</p>
            </div>
            <div>
              <input
                type="text"
                className="form-control text-start"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Table */}
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="table-responsive scroll-sm">
                <table className="table bordered-table sm-table mb-0">
                  <thead>
                    <tr>
                      <th>SL No</th>
                      <th>Medicine Name</th>
                      <th>Brand Name</th>
                      <th>Category</th>
                      <th>Unit Price</th>
                      <th>Pack Size</th>
                      <th>Total Pack</th>
                      <th>Status</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.brand}</td>
                        <td>{item.category}</td>
                        <td>${item.price}</td>
                        <td>{item.packSize}</td>
                        <td>{item.totalPack}</td>
                        <td>
                          {item.totalPack === 0 ? (
                            <p className="bg-danger-subtle text-danger fw-semibold px-2 py-1 rounded-pill">
                              Out of Stock
                            </p>
                          ) : (
                            <p className="bg-success-subtle text-success fw-semibold px-2 py-1 rounded-pill">
                              Available
                            </p>
                          )}
                        </td>
                        <td className="text-center">
                          <button className="btn btn-sm btn-warning me-2 rounded-pill">
                            Edit
                          </button>
                          <button className="btn btn-sm btn-danger rounded-pill">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Pagination & Entries Count */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="text-muted">
              Showing {filteredData.length > 0 ? 1 : 0} to {filteredData.length}{" "}
              of {medicinesData.length} entries
            </div>
            <nav>
              <ul className="pagination mb-0">
                <li className="page-item">
                  <button className="page-link text-black border-0">
                    &lt;&lt;
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link text-black border-0">
                    &lt;
                  </button>
                </li>
                <li className="page-item active">
                  <button className="page-link text-black border-0">1</button>
                </li>
                <li className="page-item">
                  <button className="page-link text-black border-0">
                    &gt;
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link text-black border-0">
                    &gt;&gt;
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicinesLayer;
