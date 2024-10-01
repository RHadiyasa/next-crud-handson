import prisma from "./prisma";

const ITEMS_PER_PAGE = 5;

export const getContacts = async (query: string, currentPage: number) => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const contacts = await prisma.contact.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE, // ini sama kaya limit (item per page)
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive", // tidak peduli uppercase or lowercase
            },
          },
          {
            phone: {
              contains: query,
              mode: "insensitive", // tidak peduli uppercase or lowercase
            },
          },
        ],
      },
    });
    return contacts;
  } catch (error) {
    throw new Error("Failed to fetch contact data...");
  }
};
export const getContactById = async (id: string) => {
  try {
    const contacts = await prisma.contact.findUnique({
      where: { id },
    });
    return contacts;
  } catch (error) {
    throw new Error("Failed to fetch contact data...");
  }
};

export const getContactPages = async (query: string) => {
  try {
    const contacts = await prisma.contact.count({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive", // tidak peduli uppercase or lowercase
            },
          },
          {
            phone: {
              contains: query,
              mode: "insensitive", // tidak peduli uppercase or lowercase
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(Number(contacts) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    throw new Error("Failed to fetch contact data...");
  }
};
