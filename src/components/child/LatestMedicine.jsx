import React, { useState } from "react";
import { Link } from "react-router-dom";

const LatestMedicine = () => {
  const medicinesData = [
    {
      id: "101",
      name: "Paracetamol",
      brand: "Acme",
      category: "Pain Relievers",
      purchasePrice: 50,
      packSize: "10 Tablets",
      totalPackCase: 10,
    },
    {
      id: "102",
      name: "Amoxicillin",
      brand: "Square",
      category: "Antibiotics",
      purchasePrice: 120,
      packSize: "15 Capsules",
      totalPackCase: 15,
    },
    {
      id: "103",
      name: "Cetirizine",
      brand: "Beximco",
      category: "Allergy Medication",
      purchasePrice: 30,
      packSize: "10 Tablets",
      totalPackCase: 12,
    },
    {
      id: "104",
      name: "Vitamin C",
      brand: "Renata",
      category: "Vitamins & Supplements",
      purchasePrice: 90,
      packSize: "20 Tablets",
      totalPackCase: 8,
    },
    {
      id: "105",
      name: "Cough Syrup",
      brand: "Eskayef",
      category: "Cough & Cold",
      purchasePrice: 80,
      packSize: "100ml Bottle",
      totalPackCase: 5,
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
            <p>Latest 5 Medicine Stock</p>
            <Link
              to="/medicine-stock"
              className="btn text-primary d-flex align-items-center gap-2"
            >
               View All <span>&gt;</span>
            </Link>
          </div>

          {/* Table */}
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="table-responsive scroll-sm">
                <table className="table bordered-table sm-table mb-0">
                  <thead>
                    <tr>
                      <th>Medicine Name</th>
                      <th>Total Pack Case</th>
                      <th>Purchase Price</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.slice(0, 1).map((item, index) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.totalPackCase}</td>
                        <td>${item.purchasePrice}</td>
                        <td>${item.purchasePrice * item.totalPackCase}</td>
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

export default LatestMedicine;
