import React from "react";

const Search = () => {
  return (
    <div className="relative flex flex-1">
      <input
        type="text"
        className="w-full border border-gray-200 py-2 pl-10 text-sm outline-2 rounded-md"
        placeholder="search..."
      />
    </div>
  );
};

export default Search;
