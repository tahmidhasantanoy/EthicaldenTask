import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const EmailLayer = () => {
  const usersData = [
    {
      EID: "1001",
      Name: "Dianne Russell",
      Role: "Manager",
      Contact: "(123) 456-7890",
      Email: "redaniel@gmail.com",
    },
    {
      EID: "1002",
      Name: "Wade Warren",
      Role: "Developer",
      Contact: "(123) 456-7891",
      Email: "xterris@gmail.com",
    },
    {
      EID: "1003",
      Name: "Albert Flores",
      Role: "Designer",
      Contact: "(123) 456-7892",
      Email: "seannand@mail.ru",
    },
    {
      EID: "1004",
      Name: "Bessie Cooper",
      Role: "Admin",
      Contact: "(123) 456-7893",
      Email: "igerrin@gmail.com",
    },
    {
      EID: "1005",
      Name: "Arlene McCoy",
      Role: "HR",
      Contact: "(123) 456-7894",
      Email: "fellora@mail.ru",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(usersData);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = usersData.filter((user) =>
      user.Role.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="col-xxl-12 col-xl-12">
      <div className="card h-100">
        <div className="card-body p-24">
          {/* Search & Entries per Page */}
          <div className="d-flex justify-content-between align-items-center mb-16">
            {/* Entries Per Page */}
            <div className="d-flex align-items-center gap-2">
              <select className="form-select form-select-sm w-auto">
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
              <p className="mb-0">entries per page</p>
            </div>

            {/* Search Bar */}
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
                      <th scope="col">SL No</th>
                      <th scope="col">EID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Role</th>
                      <th scope="col">Contact</th>
                      <th scope="col">Email</th>
                      <th scope="col" className="text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((user, index) => (
                      <tr key={user.EID}>
                        <td>{index + 1}</td>
                        <td>{user.EID}</td>
                        <td>{user.Name}</td>
                        <td>{user.Role}</td>
                        <td>{user.Contact}</td>
                        <td>{user.Email}</td>
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
            {/* Left - Showing Entries Count */}
            <div className="text-muted">
              Showing {filteredData.length > 0 ? 1 : 0} to {filteredData.length}{" "}
              of {usersData.length} entries
            </div>

            {/* Right - Pagination */}
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

export default EmailLayer;
