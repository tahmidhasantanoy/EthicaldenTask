import React, { useState } from "react";

const MedicineStockLayer = () => {
  const medicinesData = [
    {
      id: "101",
      name: "Paracetamol",
      purchasePrice: "40",
      totalPack: "100",
    },
    {
      id: "102",
      name: "Amoxicillin",
      purchasePrice: "100",
      totalPack: "200",
    },
    {
      id: "103",
      name: "Cetirizine",
      purchasePrice: "25",
      totalPack: "150",
    },
    {
      id: "104",
      name: "Vitamin C",
      purchasePrice: "80",
      totalPack: "300",
    },
    {
      id: "105",
      name: "Cough Syrup",
      purchasePrice: "70",
      totalPack: "50",
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
                      <th>Purchase Price</th>
                      <th>Total Pack</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>${item.purchasePrice}</td>
                        <td>{item.totalPack}</td>
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

export default MedicineStockLayer;
