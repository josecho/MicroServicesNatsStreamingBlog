import { Subjects, Publisher, OrderCancelledEvent } from '@jlvbcooptickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}