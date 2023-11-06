import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../Redux/actions/searchActions";
import { Outlet, Link } from "react-router-dom";
function Search() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearchQuery(searchText));
  };

  return (
    <div className="container mt-4 text-center">
      <div className="search-container mb-5">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
        <Link to="/studentDashboard" className="btn btn-secondary">Student Dashboard</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Search;
