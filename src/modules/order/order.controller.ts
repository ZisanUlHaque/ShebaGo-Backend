import { catchAsync } from "../../utils/catch-async";
import { sendResponse } from "../../utils/send-response";
import { orderService } from "./order.service";
import httpStatus from "http-status";

const createOrder = catchAsync(async (req, res) => {
  const userId = req.user?.id;
  const payload = req.body;

  if (!payload.quantity || !payload.serviceId) {
    throw new Error("Please provide service id and quantity");
  }
  const response = await orderService.createOrder(userId, payload);

  sendResponse(res, {
    success : true,
    statusCode: httpStatus.CREATED,
    message: "Order Placed successfully",
    data: response,
  });

});

export const orderController = {
    createOrder
}