import React from "react";
import { IoSearch } from "react-icons/io5";
import Button from "./Button";

const Search = () => {
  return (
    <div className="relative flex flex-1">
      <input
        type="text"
        className="w-full border border-gray-200 py-2 pl-10 text-sm outline-2 rounded-md"
        placeholder="Search..."
      />
      <IoSearch className="absolute top-3 left-3 text-gray-400" />
    </div>
  );
};

export default Search;
