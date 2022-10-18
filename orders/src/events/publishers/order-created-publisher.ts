import { Publisher, OrderCreatedEvent, Subjects } from '@jlvbcooptickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}