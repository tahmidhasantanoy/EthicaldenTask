import React, { useState } from "react";

const OrderLayer = () => {
  const ordersData = [
    {
      orderNumber: "ORD001",
      customerName: "John Doe",
      customerEmail: "johndoe@example.com",
      medicineName: "Paracetamol",
      orderAmount: "$40",
      orderDate: "2025-03-15",
    },
    {
      orderNumber: "ORD002",
      customerName: "Jane Smith",
      customerEmail: "janesmith@example.com",
      medicineName: "Amoxicillin",
      orderAmount: "$100",
      orderDate: "2025-03-14",
    },
    {
      orderNumber: "ORD003",
      customerName: "Michael Johnson",
      customerEmail: "michaelj@example.com",
      medicineName: "Cetirizine",
      orderAmount: "$25",
      orderDate: "2025-03-13",
    },
    {
      orderNumber: "ORD004",
      customerName: "Emily Brown",
      customerEmail: "emilyb@example.com",
      medicineName: "Vitamin C",
      orderAmount: "$80",
      orderDate: "2025-03-12",
    },
    {
      orderNumber: "ORD005",
      customerName: "David Wilson",
      customerEmail: "davidw@example.com",
      medicineName: "Cough Syrup",
      orderAmount: "$70",
      orderDate: "2025-03-11",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(ordersData);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = ordersData.filter((item) =>
      item.customerName.toLowerCase().includes(query.toLowerCase())
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
                placeholder="Search by Customer Name..."
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
                      <th>SL No.</th>
                      <th>Order Number</th>
                      <th>Customer Name</th>
                      <th>Customer Email</th>
                      <th>Medicine Name</th>
                      <th>Order Amount</th>
                      <th>Order Date</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((item, index) => (
                      <tr key={item.orderNumber}>
                        <td>{index + 1}</td>
                        <td>{item.orderNumber}</td>
                        <td>{item.customerName}</td>
                        <td>{item.customerEmail}</td>
                        <td>{item.medicineName}</td>
                        <td>{item.orderAmount}</td>
                        <td>{item.orderDate}</td>
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
              of {ordersData.length} entries
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

export default OrderLayer;
