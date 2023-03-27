import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const app = nc();

export async function getUsers() {
  const prisma = new PrismaClient();
  let users = await prisma.user.findMany();
  return { users: users };
}

app.get(async (req: NextApiRequest, res: NextApiResponse) => {
  res.json(await getUsers());
});
export default app;
