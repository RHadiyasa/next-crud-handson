"use client";
import Link from "next/link";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { generatePagination } from "@/app/lib/utils";

// Akan menerima props total pages
const Pagination = ({ totalPages }: { totalPages: number }) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: string | number) => {
    // string | number karena di URL bar kita menggunakan string, dan ketika kalkulasi kita menggunakan number
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathName}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  const PaginationNumber = ({
    page,
    href,
    position,
    isActive,
  }: {
    page: number | string;
    href: string;
    position?: "first" | "last" | "middle" | "single";
    isActive: boolean;
  }) => {
    const className = clsx(
      "flex h-10 w-10 items-center justify-center text-sm border",
      {
        "rounded-l-sm": position === "first" || position === "single",
        "rounded-r-sm": position === "last" || position === "single",
        "z-10 bg-blue-100 border-blue-500 text-blue-500": isActive,
        "hover:bg-gray-100": !isActive && position !== "middle",
        "text-gray-500 pointer-event-none": !isActive && position === "middle",
      }
    );

    return isActive && position === "middle" ? (
      <div className={className}>{page}</div>
    ) : (
      <Link href={href} className={className}>
        {page}
      </Link>
    );
  };

  const PaginationArrow = ({
    href,
    direction,
    isDisabled,
  }: {
    href: string;
    direction: "left" | "right";
    isDisabled: boolean;
  }) => {
    const className = clsx(
      "flex h-10 w-10 items-center justify-center text-sm border",
      {
        "rounded-l-lg": direction === "left",
        "rounded-r-lg": direction === "right",
        "text-gray-500 pointer-event-none": isDisabled,
        "hover:bg-gray-100": !isDisabled,
      }
    );

    const icon = direction === "left" ? <BiChevronLeft /> : <BiChevronRight />;

    return isDisabled ? (
      <div className={className}>{icon}</div>
    ) : (
      <Link href={href} className={className}>
        {icon}
      </Link>
    );
  };

  return (
    <div className="inline-flex gap-1">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      <div className="flex space-x-px">
        {allPages.map((page, index) => {
          let position: "first" | "last" | "single" | "middle" | undefined;

          if (index === 0) position = "first";
          if (index === allPages.length - 1) position = "last";
          if (allPages.length === 1) position = "single";
          if (page === "...") position = "middle";

          return (
            <PaginationNumber
              key={index}
              page={page}
              href={createPageURL(page)}
              position={position}
              isActive={page === currentPage}
            />
          );
        })}
      </div>

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
};

export default Pagination;
