import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { TypeModifier } from '@angular/compiler';
import { OnChanges, SimpleChanges } from '@angular/core';

import { FormField } from '../entities/formField';

@Component({
  selector: 'app-form-result',
  templateUrl: './form-result.component.html',
  styleUrls: ['./form-result.component.scss'],
})
export class FormResultComponent implements OnInit, OnChanges {
  @Input() formData: FormField[] = [];

  title = 'Result';

  ngOnInit(): void {
    console.log('result component on init..');
  }
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
