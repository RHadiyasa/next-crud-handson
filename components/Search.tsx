"use client";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(term);

    // Setiap kali user mengetik huruf, fungsi ini akan dipanggil (request terus)
    // Bukan bestpractice karena request yang dipanggil akan terlalu banyak
    // Jadi dibuat debounce, menggunakan useDebouncedCallback
    // Hal tersebut untuk membuat agar request baru terjadi ketika user berhenti mengetik setelah beberapa detik

    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathName}?${params.toString()}`);
  }, 500); // artinya function baru dieksekusi setelah user berhenti mengetik selama 500 ms (1/2 detik)

  return (
    <div className="relative flex flex-1">
      <input
        type="text"
        className="w-full border border-gray-200 py-2 pl-10 text-sm outline-2 rounded-md"
        placeholder="Search..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <IoSearch className="absolute top-3 left-3 text-gray-400" />
    </div>
  );
};

export default Search;
