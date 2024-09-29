import Link from "next/link";
import React from "react";
import { IoAddSharp } from "react-icons/io5";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <Link
      href={"/contacts/create"}
      className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      <IoAddSharp size={18} />
      {text}
    </Link>
  );
};

export default Button;
