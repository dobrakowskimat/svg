import { Component } from '@angular/core';
import { IComputerFormValues } from '../canvas-controls/canvas-controls.component';

@Component({
  selector: 'app-canvas-container',
  templateUrl: './canvas-container.component.html',
  styleUrls: ['./canvas-container.component.scss'],
})
export class CanvasContainerComponent {
  values!: IComputerFormValues;
  updateCanvas(event: IComputerFormValues) {
    this.values = event;
  }
}
