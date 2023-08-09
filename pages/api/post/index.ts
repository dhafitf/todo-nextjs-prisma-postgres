import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, content } = req.body;

  const result = await prisma.todo.create({
    data: {
      title: title,
      content: content,
    },
  });
  res.json(result);
}
