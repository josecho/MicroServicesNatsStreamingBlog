
import { Listener } from './base-listeners';
import { Message } from 'node-nats-streaming';

export class TicketCreatedListener extends Listener {
    subject = 'ticket:created';
    queueGroupName = 'payment-service';

    onMessage(data: any, msg: Message): void {
        console.log('Event data!', data);

        msg.ack();
    }

}
