import { BooleanInput } from '@angular/cdk/coercion';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormField } from 'src/app/entities/formField';

@Component({
  selector: 'input-preview',
  templateUrl: './input-preview.component.html',
  styleUrls: ['./input-preview.component.scss'],
})
export class InputPreviewComponent implements OnInit {
  @Input() fieldData: FormField = new FormField('input');

  fieldControl = new FormControl();

  constructor() {}

  ngOnInit(): void {
    this.fieldControl = new FormControl({
      value: this.fieldData.value,
      disabled: this.fieldData.disabled,
    });
    if (this.fieldData.required) {
      this.fieldControl.addValidators(Validators.required);
    }
  }

  testFunction(): void {
    console.log('hi');
  }
}
