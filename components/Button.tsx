"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { IoAddSharp } from "react-icons/io5";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { deleteContact } from "@/app/lib/action";
import { VscLoading } from "react-icons/vsc";
import { useRouter } from "next/navigation";

interface ButtonProps {
  text: string;
}

export const CreateButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <Link
      href={"/contacts/create"}
      className="flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      <IoAddSharp />
      <p>{text}</p>
    </Link>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    setLoading(true);
    router.push(`/contacts/edit/${id}`);
  };

  return (
    <button
      className="inline-flex items-center space-x-1 text-white bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? <VscLoading className="animate-spin" /> : <BiEdit />}
    </button>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);

  const DeleteContactById = deleteContact.bind(null, id);
  const handleClick = () => {
    setLoading(true);
    DeleteContactById();
  };

  return (
    <form action={DeleteContactById}>
      <button
        onClick={handleClick}
        className="inline-flex items-center space-x-1 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        disabled={loading}
      >
        {loading ? <VscLoading className="animate-spin" /> : <BiTrash />}
      </button>
    </form>
  );
};

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  const className = clsx(
    "w-full text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
    { "opacity-50 cursor-progress": pending }
  );

  return (
    <button type="submit" className={className} disabled={pending}>
      {label === "save" ? (
        <span>{pending ? "Saving..." : "Save"}</span>
      ) : (
        <span>{pending ? "Updating..." : "Update"}</span>
      )}
    </button>
  );
};
