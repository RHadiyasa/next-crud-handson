import { getContacts } from "@/app/lib/data";
import React from "react";
import { DeleteButton, EditButton } from "./Button";
import { formatDate } from "@/app/lib/utils";

const ContactTable = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const contacts = await getContacts(query, currentPage);

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Contact Name</th>
          <th className="py-3 px-6">Phone Number</th>
          <th className="py-3 px-6">Created At</th>
          <th className="py-3 px-6">Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={contact.id}>
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{contact.name}</td>
            <td className="py-3 px-6">{contact.phone}</td>
            <td className="py-3 px-6">
              {formatDate(contact.createdAt.toString())}
            </td>
            <td className="py-3 px-6 flex gap-1">
              <EditButton id={contact.id} />
              <DeleteButton id={contact.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
