import { CreateButton } from "@/components/Button";
import ContactTable from "@/components/ContactTable";
import Search from "@/components/Search";
import React from "react";
import { getContactPages } from "../lib/data";
import Pagination from "@/components/Pagination";
import { TableSkeleton } from "@/components/Skeleton";
import { Suspense } from "react";

const Contacts = async ({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await getContactPages(query);

  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-1 mb-5">
        <Search />
        <CreateButton text="Create" />
      </div>
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <ContactTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="flex justify-center mt-4">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Contacts;
