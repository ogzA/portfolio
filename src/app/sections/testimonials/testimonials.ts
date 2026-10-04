import { Component, signal } from '@angular/core';

interface Testimonial {
  text: string;
  author: string;
}

@Component({
  imports: [],
  selector: 'app-testimonials',
  styleUrl: './testimonials.scss',
  templateUrl: './testimonials.html',
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      text: 'Oğuz has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
      author: 'H.Janisch - Team Partner',
    },
    {
      text: 'I had the good fortune of working with Oğuz in a group project at the Developer Akademie. He always stayed calm, communicated clearly and made sure our team was set up for success.',
      author: 'A.Fischer - Team Partner',
    },
    {
      text: 'Our project benefited enormously from Oğuz’s efficient way of working and his eye for clean, well-structured code.',
      author: 'T.Schulz - Frontend Developer',
    },
  ];

  // Last and first item are cloned at the edges, so there is always a card on both sides
  slides = [
    this.testimonials[this.testimonials.length - 1],
    ...this.testimonials,
    this.testimonials[0],
  ];

  activeIndex = signal(0);

  next() {
    this.activeIndex.update((index) => (index + 1) % this.testimonials.length);
  }

  previous() {
    this.activeIndex.update(
      (index) => (index - 1 + this.testimonials.length) % this.testimonials.length,
    );
  }

  goTo(index: number) {
    this.activeIndex.set(index);
  }
}
