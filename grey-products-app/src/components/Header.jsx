import React, { useState, useEffect } from "react";

const Header = ({ search, setSearch, viewMode, setViewMode }) => {
  const [query, setQuery] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => setSearch(query), 500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="header">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="view-toggle">
        <button
          className={viewMode === "list" ? "active" : ""}
          onClick={() => setViewMode("list")}
        >
          List
        </button>
        <button
          className={viewMode === "card" ? "active" : ""}
          onClick={() => setViewMode("card")}
        >
          Card
        </button>
      </div>
    </div>
  );
};

export default Header;
