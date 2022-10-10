import { Listener } from './base-listeners';
import { Message } from 'node-nats-streaming';
import { TicketCreatedEvent } from './ticket-created-event';
import { Subjects } from './subjects';


export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
    queueGroupName = 'payment-service';

    onMessage(data: any, msg: Message): void {
        console.log('Event data!', data);

        msg.ack();
    }

}
