import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

const app = nextConnect();

app.get(async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(500).json({ message: "Route Not Found!" });
  return;
});

app.post(async (req: NextApiRequest, res: NextApiResponse) => {
  let body = JSON.parse(req.body);
  let user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      profileUrl: body.avatarUrl,
      password: body.password,
      roles: ["comment"],
    },
  });
  res.status(200).json({ user: user });
  return;
});
export default app;
