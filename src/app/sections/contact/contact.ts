// Vorübergehend zum Testen
import { JsonPipe } from '@angular/common';

import { Component, DOCUMENT, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// Not only spaces, no space at the start or end
const NO_EDGE_SPACES = /^\S(?:[\s\S]*\S)?$/;

// No spaces, needs an extension like .de or .com
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

@Component({
  imports: [ReactiveFormsModule, JsonPipe],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  fb = inject(FormBuilder);
  private document = inject(DOCUMENT);

  contactForm = this.fb.nonNullable.group(
    {
      name: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern(NO_EDGE_SPACES)],
      ],
      email: ['', [Validators.required, Validators.email, Validators.pattern(EMAIL_PATTERN)]],
      message: [
        '',
        [Validators.required, Validators.minLength(15), Validators.pattern(NO_EDGE_SPACES)],
      ],
      privacy: [false, { validators: [Validators.requiredTrue], updateOn: 'change' }],
    },
    { updateOn: 'blur' },
  );

  get email() {
    return this.contactForm.get('email')?.value;
  }

  /* 
  userForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
  }); */

  fillForm() {
    this.contactForm.setValue({
      name: 'Oguz',
      email: 'assd@asdada',
      message: '',
      privacy: true,
    });
  }

  patchForm() {
    this.contactForm.patchValue({
      name: 'Banana',
    });
  }

export class Contact {}
  formReset() {
    this.contactForm.reset();
  }
}
