import { Component, signal } from '@angular/core';
import { PROJECTS, Project } from './projects.data';
import { ProjectDialog } from './project-dialog/project-dialog';

@Component({
  imports: [ProjectDialog],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly projects = PROJECTS;
  protected readonly hoveredProject = signal<Project | null>(null);
  protected readonly selectedIndex = signal<number | null>(null);

  protected openDialog(index: number): void {
    this.selectedIndex.set(index);
  }

  protected closeDialog(): void {
    this.selectedIndex.set(null);
  }

  protected nextProject(): void {
    this.selectedIndex.update((index) =>
      index === null ? null : (index + 1) % this.projects.length,
    );
  }
}
