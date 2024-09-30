"use server";

import z from "zod";
import prisma from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Membuat schema untuk validasi menggunakan zod
const ContactSchema = z.object({
  name: z.string().min(6),
  phone: z.string().min(11),
});

export const saveContact = async (prevState: any, formData: FormData) => {
  const validatedFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  console.log(validatedFields);

  // Jika data tidak valid
  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Jika data valid
  // Validasi agar data yang masuk ke database adalah data yang valid
  // Validasi menggunakan zod

  try {
    await prisma.contact.create({
      data: {
        name: validatedFields.data.name,
        phone: validatedFields.data.phone,
      },
    });
  } catch (error) {
    return {
      message: "Failed to save contact data",
    };
  }

  // revalidate
  revalidatePath("/contacts");
  redirect("/contacts");
};
