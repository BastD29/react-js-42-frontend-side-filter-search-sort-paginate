import { useEffect, useState } from "react";
import { filterUsers, searchUsers, sortUsers } from "./helpers";
import users from "./data";
import Pagination from "./Pagination";
import Search from "./Search";
import { Sort } from "./Sort";
import Filter from "./Filter";
import Items from "./Items";

export default function AppRefactored() {
  const [selectedJob, setSelectedJob] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);

  useEffect(() => {
    setFilteredUsers(filterUsers(users, selectedJob));
  }, [users, selectedJob]);

  useEffect(() => {
    setSearchedUsers(searchUsers(filteredUsers, filterTerm));
  }, [filteredUsers, filterTerm]);

  useEffect(() => {
    setSortedUsers(sortUsers(searchedUsers, sortOrder));
  }, [searchedUsers, sortOrder]);

  // ** PAGINATION ** //

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const index0fLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = index0fLastItem - itemsPerPage;
  const currentItems = sortedUsers.slice(indexOfFirstItem, index0fLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Search
        setSearchTerm={setSearchTerm}
        setFilterTerm={setFilterTerm}
        searchTerm={searchTerm}
      />
      <Sort setSortOrder={setSortOrder} />
      <Filter selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
      <Items currentItems={currentItems} />
      <Pagination
        paginate={paginate}
        itemsPerPage={itemsPerPage}
        totalItems={sortedUsers.length}
        currentPage={currentPage}
      />
    </>
  );
}
