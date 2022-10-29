import {
    Subjects,
    Publisher,
    ExpirationCompleteEvent,
  } from '@jlvbcooptickets/common';
  
  export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
  }