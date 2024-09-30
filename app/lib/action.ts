"use server";

import z from "zod";

export const saveContact = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  console.log(data);

  // Validasi agar data yang masuk ke database adalah data yang valid
  // Validasi menggunakan zod
};
