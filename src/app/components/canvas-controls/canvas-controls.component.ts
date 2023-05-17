import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface IComputerForm {
  caseColor: FormControl<string | null>;
  gpuColor: FormControl<string | null>;
  frontCoolerColor: FormControl<string | null>;
  glassGraver: FormControl<string | null>;
  stickers: FormControl<string | null>;
}

export interface IComputerFormValues {
  caseColor?: string | null;
  gpuColor?: string | null;
  frontCoolerColor?: string | null;
  glassGraver?: string | null;
  stickers?: string | null;
}

@Component({
  selector: 'app-canvas-controls',
  templateUrl: './canvas-controls.component.html',
  styleUrls: ['./canvas-controls.component.scss'],
})
export class CanvasControlsComponent implements OnInit {
  @Output() formUpdated = new EventEmitter<IComputerFormValues>();
  computerCustomizationForm = new FormGroup<IComputerForm>({
    caseColor: new FormControl('#00bb55'),
    gpuColor: new FormControl('#cc3300'),
    frontCoolerColor: new FormControl(''),
    glassGraver: new FormControl(''),
    stickers: new FormControl(''),
  });

  ngOnInit(): void {
    this.formUpdated.next(this.computerCustomizationForm.value);
    this.computerCustomizationForm.valueChanges.subscribe(
      (value: IComputerFormValues) => this.formUpdated.next(value)
    );
  }

  onSubmit() {
    console.log(this.computerCustomizationForm.controls.caseColor.value);
  }
}
