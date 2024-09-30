import Link from "next/link";
import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { IoAddSharp } from "react-icons/io5";

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

export const EditButton = () => {
  return (
    <Link
      href={"/contacts/edit"}
      className="inline-flex items-center space-x-1 text-white bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      <BiEdit />
    </Link>
  );
};

export const DeleteButton = () => {
  return (
    <Link
      href={"/contacts/delete"}
      className="inline-flex items-center space-x-1 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      <BiTrash />
    </Link>
  );
};
