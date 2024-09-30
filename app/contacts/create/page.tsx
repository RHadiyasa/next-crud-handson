import CreateForm from "@/components/CreateForm";
import React from "react";

const CreateContactPage = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl text-center mb-2 font-semibold">Add New Contact</h1>
      <CreateForm />
    </div>
  );
};

export default CreateContactPage;
