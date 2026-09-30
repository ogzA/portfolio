import { Component } from '@angular/core';
import { SKILLS, Skill } from './skills.data';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {
  skills: Skill[] = SKILLS;
}
