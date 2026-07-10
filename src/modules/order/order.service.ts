import { Order } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createOrder = async (
  userId: string,
  paylaod: Pick<Order, "quantity" | "serviceId" | "orderStatus">,
) => {
  const service = await prisma.service.findUnique({
    where: { id: paylaod.serviceId },
  });

  if (!service) {
    throw new Error("Service Not found");
  }

  const totalPrice = Number(service.price) * paylaod.quantity;

  const data = { ...paylaod, userId, totalPrice };
  const order = await prisma.order.create({ data });

  return order;
};

export const orderService = {
    createOrder
}