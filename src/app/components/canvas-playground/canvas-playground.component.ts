import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IComputerFormValues } from '../canvas-controls/canvas-controls.component';

@Component({
  selector: 'app-canvas-playground',
  templateUrl: './canvas-playground.component.html',
  styleUrls: ['./canvas-playground.component.scss'],
})
export class CanvasPlaygroundComponent implements AfterViewInit {
  @Input() values!: IComputerFormValues;
  @ViewChild('customizable') svgRef!: ElementRef<SVGElement>;
  // canvas: HTMLCanvasElement | null = null;
  // context: CanvasRenderingContext2D | null = null;

  constructor() {}

  ngAfterViewInit(): void {
    // this.context = this.canvasRef.nativeElement.getContext('2d');
    // if (this.context) {
    //   this.context.moveTo(0, 0);
    //   this.context.lineTo(200, 100);
    //   this.context.stroke();
    // }
  }
}
