"use server";

export const saveContact = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  console.log(data);
};
