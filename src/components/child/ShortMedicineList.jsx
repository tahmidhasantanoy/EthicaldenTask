import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShortMedicineList = () => {
  const medicinesData = [
    {
      id: "101",
      name: "Paracetamol",
      packSize: "10 Tablets",
      price: "50",
      totalPackCase: "10",
      status: "Available",
    },
    {
      id: "102",
      name: "Amoxicillin",
      packSize: "15 Capsules",
      price: "120",
      totalPackCase: "15",
      status: "Out of Stock",
    },
    {
      id: "103",
      name: "Cetirizine",
      packSize: "10 Tablets",
      price: "30",
      totalPackCase: "8",
      status: "Available",
    },
    {
      id: "104",
      name: "Vitamin C",
      packSize: "20 Tablets",
      price: "90",
      totalPackCase: "12",
      status: "Available",
    },
    {
      id: "105",
      name: "Cough Syrup",
      packSize: "100ml Bottle",
      price: "80",
      totalPackCase: "5",
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
    <div className="col-xxl-12 col-xl-10 py-24">
      <div className="card h-100">
        <div className="card-body p-24">
          <div className="d-flex justify-content-between align-items-center mb-16">
            <p>Medicine List</p>
            <Link
              to="/medicine-stock"
              className="btn text-primary d-flex align-items-center gap-2"
            >
              View All <span>&gt;</span>
            </Link>
          </div>
          <hr />

          {/* Table */}
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="table-responsive scroll-sm">
                <table className="table bordered-table sm-table mb-0">
                  <thead>
                    <tr>
                      <th>Medicine Name</th>
                      <th>Pack Size</th>
                      <th>Unit Price</th>
                      <th>Total Pack Case</th>
                      <th>Status</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.slice(0, 2).map((item, index) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.packSize}</td>
                        <td>${item.price}</td>
                        <td>{item.totalPackCase}</td>
                        <td>{item.status}</td>
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
        </div>
      </div>
    </div>
  );
};

export default ShortMedicineList;
