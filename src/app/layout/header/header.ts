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
  currentLang = signal('en');

  onScroll() {
    this.isScrolled.set(window.scrollY > 100);
  }

  useLanguage(language: string): void {
    this.currentLang.set(language);
  }
}
