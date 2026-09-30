import {
  Component,
  ElementRef,
  afterNextRender,
  computed,
  input,
  output,
  viewChild,
} from '@angular/core';
import { Project } from '../projects.data';

@Component({
  imports: [],
  selector: 'app-project-dialog',
  styleUrl: './project-dialog.scss',
  templateUrl: './project-dialog.html',
})
export class ProjectDialog {
  readonly project = input.required<Project>();
  readonly index = input.required<number>();
  readonly closed = output<void>();
  readonly next = output<void>();

  protected readonly projectNumber = computed(() => String(this.index() + 1).padStart(2, '0'));

  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  constructor() {
    afterNextRender(() => this.dialog().nativeElement.showModal());
  }

  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) {
      this.closed.emit();
    }
  }
}
