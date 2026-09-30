import { Component } from '@angular/core';
import { RouterEvent, RouterLink } from '@angular/router';

interface FooterLink {
  label: string;
  href: string;
  external: boolean;
}

@Component({
  imports: [RouterLink],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly year = new Date().getFullYear();
  protected readonly links: FooterLink[] = [
    { label: 'GitHub', href: 'https://github.com/oguzakankan', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oguzakankan', external: true },
    { label: 'Email', href: 'mailto:email@example.com', external: false },
  ];
}
