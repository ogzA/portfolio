import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
  host: {
    '(window:scroll)': 'onScroll()',
  },
})
export class Header {
  isScrolled = signal(false);

  onScroll() {
    this.isScrolled.set(window.scrollY > 100);
  }
}
