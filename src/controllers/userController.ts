import { Request, Response } from "express";
import prisma from "../utils/prisma";

export const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();

  return res.status(200).send({
    message: `Success`,
    users,
  });
};

export const getUser = async (req: Request, res: Response) => {
  const params = req.params;
  const user = await prisma.user.findUnique({
    select: {
      name: true,
      email: true,
    },
    where: { id: Number(params.id) },
  });

  return res.status(200).send({
    message: `Hello`,
    user,
  });
};

export const createUser = async (req: Request, res: Response) => {
  const body = req.body;

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: body.password,
    },
  });

  return res.status(200).send({
    message: `Created.`,
    user,
  });
};

export const updateUser = async (req: Request, res: Response) => {
  const body = req.body;

  // const user = await prisma.user.upsert({
  //   update: {
  //     password: body.password,
  //   },
  //   create: {
  //     name: body.name,
  //     email: body.email,
  //     password: body.password,
  //   },
  //   where: {
  //     id: +req.params.id,
  //   },
  // });
  const user = await prisma.user.update({
    data: {
      name: body.name,
      email: body.email,
      password: body.password,
    },
    where: {
      id: +req.params.id,
    },
  });

  return res.status(200).send({
    message: `Updated.`,
    user,
  });
};

export const createProduct = async (req: Request, res: Response) => {
  const body = req.body;
  const product = await prisma.product.create({
    data: {
      name: body.name,
      user: { connect: { id: +body.user_id } },
      // userId: body.user_id,
    },
  });

  return res.status(200).send({
    message: `Created.`,
    product,
  });
};

export const getProducts = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({
    include: { user: { select: { name: true } } },
    orderBy: {
      name: "asc",
    },
    take: 10,
    skip: 0,
  });

  return res.status(200).send({
    message: `Success`,
    products,
  });
};
