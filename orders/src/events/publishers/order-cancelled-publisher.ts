import {Publisher, OrderCancelledEvent , Subjects} from '@jlvbcooptickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
  }