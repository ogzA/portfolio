import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  private marqueeBase = [
    'Available for remote work',
    'Frontend Developer',
    'Based in Wuppertal',
    'Open to work',
  ];

  // Twice, so one list is wider than large screens and the loop never shows a gap
  marqueeItems = [...this.marqueeBase, ...this.marqueeBase];
}
