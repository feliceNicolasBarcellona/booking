import { Component, EventEmitter, Output } from '@angular/core';
import { contactForm } from 'src/app/model/contact-form';


@Component({
  selector: 'app-contact-form',
  template: `
    <form #contactForm="ngForm" (submit)="sendEmail.emit(contactForm.value)">
      <input
        type="text"
        placeholder="Your email*"
        required
        [ngModel]
        name="email"
      />
      <textarea
        cols="20"
        rows="6"
        placeholder="Your message*"
        required
        [ngModel]
        name="message"
      ></textarea>
      <button type="submit" [disabled]="contactForm.invalid">SEND</button>
    </form>
  `,
  styles: [],
})
export class ContactFormComponent {
  @Output() sendEmail: EventEmitter<contactForm> = new EventEmitter()
}
