import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { fromEventPattern, switchMap } from 'rxjs';
import { FormField } from '../entities/formField';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from './dialog/delete-dialog/delete-dialog.component';
import { TypeModifier } from '@angular/compiler';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  @Input() formData: FormField[] = [];

  currentIndex: number = 0;
  listLength: number = 0;
  title: string = 'Builder';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onCreateFormField() {
    var startingIndex = this.formData.length;
    this.formData.push(new FormField('input', '', startingIndex));
    this.listLength++;
    console.log('list length: ' + this.listLength);
  }

  showDetailQuestion(index: number) {
    this.currentIndex = index;
  }

  swapQuestions(shiftUp: boolean, index: number) {
    if (shiftUp) {
      // swap
      var temp = this.formData[index];
      this.formData[index] = this.formData[index - 1];
      this.formData[index - 1] = temp;
      // adjust indices
      this.formData[index - 1].index = index - 1;
      this.formData[index].index = index;
      this.currentIndex--;
    } else {
      // swap
      var temp = this.formData[index];
      this.formData[index] = this.formData[index + 1];
      this.formData[index + 1] = temp;
      // adjust indices
      this.formData[index].index = index;
      this.formData[index + 1].index = index + 1;
      this.currentIndex++;
    }

  }

  confirmDeleteQuestion(index: number) {
    this.formData.splice(index, 1);
    for (let i = 0; i < this.formData.length; i++) {
      this.formData[i].index = i;
    }
    this.listLength--;

  }

  // QUESTION COMPONENT COMMANDS
  // question-component calls this, handle the modal and delete logic in the form builder.
  openDialog(item: FormField): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event) {
        if (typeof item.index !== 'undefined') {
          this.confirmDeleteQuestion(item.index);
        }
      }
    });
  }

  // question-component calls this, adjust arrays
  shiftQuestionUp(item: FormField) {
    console.log('builder.ShiftQuestionUp');
    this.swapQuestions(true, item.index != undefined ? item.index : -1);
  }

  // question-component calls this, adjust arrays
  shiftQuestionDown(item: FormField) {
    console.log('builder.ShiftQuestionDown');
    this.swapQuestions(false, item.index != undefined ? item.index : -1);
  }
}
