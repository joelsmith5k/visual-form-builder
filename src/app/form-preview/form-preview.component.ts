import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { FormField } from '../entities/formField';
import { InputPreviewComponent } from '../preview/input-preview/input-preview.component';
import { CheckboxPreviewComponent } from '../preview/checkbox-preview/checkbox-preview.component';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { TypeModifier } from '@angular/compiler';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.scss'],
})
export class FormPreviewComponent implements OnInit {
  @Input() formData: FormField[] = [];

  title = 'Preview';
  ngOnInit(): void {}
  constructor() {}

  onClearPreview() {
    console.log('clear..');
  }

  onSubmitPreview() {
    console.log('submit..');
    console.log(this.formData);
  }
}
