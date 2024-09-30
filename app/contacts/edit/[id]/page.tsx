import UpdateForm from "@/components/UpdateForm";
import React from "react";
import { getContactById } from "@/app/lib/data";
import { notFound } from "next/navigation";

const UpdateContactPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const contact = await getContactById(id);

  if (!contact) {
    notFound();
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl text-center mb-2 font-semibold">
        Update Contact
      </h1>
      <UpdateForm contact={contact} />
    </div>
  );
};

export default UpdateContactPage;
