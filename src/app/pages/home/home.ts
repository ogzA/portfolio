import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { AboutMe } from '../../sections/about-me/about-me';
import { Skills } from '../../sections/skills/skills';
import { Projects } from '../../sections/projects/projects';
import { Testimonials } from '../../sections/testimonials/testimonials';
import { Contact } from '../../sections/contact/contact';

@Component({
  imports: [Hero, AboutMe, Skills, Projects, Testimonials, Contact],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
