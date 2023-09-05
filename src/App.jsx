import React, { useState } from "react";
import Pagination from "./Pagination";
import users from "./data";

export default function App() {
  // ! la valeur à modifier est la variable devant slice dans currentItems
  // ! idem pour totalItems

  // ** FILTERING ** //

  const [selectedJob, setSelectedJob] = useState("All");

  // prettier-ignore
  const handleChangeJob = (e) => {setSelectedJob(e.target.value);};

  // prettier-ignore
  const filteredUsers = users.filter((user) => selectedJob === "All" || user.job === selectedJob);

  // ** SEARCH ** //

  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  // prettier-ignore
  const searchedUsers = filteredUsers.filter((user) => user.name.toLowerCase().includes(filterTerm.toLowerCase()));
  console.log("searchedUsers", searchedUsers);

  const handleSearch = () => {
    setFilterTerm(searchTerm);
  };

  // ** SORTING ** //

  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortChange = (value) => {
    setSortOrder(value);
  };

  const sortedUsers = [...searchedUsers].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name > b.name ? 1 : -1;
    }
    if (sortOrder === "desc") {
      return a.name < b.name ? 1 : -1;
    }
  });

  // ** PAGINATION ** //

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const index0fLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = index0fLastItem - itemsPerPage;
  const currentItems = sortedUsers.slice(indexOfFirstItem, index0fLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {/* SEARCH */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by name"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {/* SORTING */}
      <div style={{ marginBottom: "20px" }}>
        <div onClick={() => handleSortChange("asc")}>A to Z</div>
        <div onClick={() => handleSortChange("desc")}>Z to A</div>
      </div>
      {/* FILTERING */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          Filter by category:
          <select onChange={handleChangeJob} value={selectedJob}>
            <option value="All">All</option>
            <option value="Accountant">Accountant</option>
            <option value="Developer">Developer</option>
            <option value="Marketing">Marketing</option>
          </select>
        </label>
      </div>
      {/* LIST OF ITEMS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "10px",
        }}
      >
        {currentItems.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                border: "solid 1px",
                padding: "5px",
              }}
            >
              <p>{item.id}</p>
              <p>{item.name}</p>
              <p>{item.job}</p>
            </div>
          );
        })}
      </div>
      {/* PAGINATION */}
      <Pagination
        paginate={paginate}
        itemsPerPage={itemsPerPage}
        totalItems={sortedUsers.length}
        currentPage={currentPage}
      />
    </>
  );
}
