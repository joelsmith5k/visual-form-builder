import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { FormField } from '../entities/formField';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() formField: FormField = new FormField('input');

  @Input() listLength!: number;

  @Output() openDialog: EventEmitter<any> = new EventEmitter();

  @Output() shiftQuestionUp: EventEmitter<any> = new EventEmitter(true);

  @Output() shiftQuestionDown: EventEmitter<any> = new EventEmitter(true);

  ordinal: number;

  constructor() {
    this.ordinal =
      this.formField.index === 0 || this.formField.index
        ? this.formField.index + 1
        : -1;
  }

  ngOnInit(): void {
    console.log(this.formField.index);
    this.ordinal =
      this.formField.index === 0 || this.formField.index
        ? this.formField.index + 1
        : -1;
  }

  onDelete() {
    this.openDialog.emit(this.formField);
  }

  onShiftUp() {
    console.log("question.OnShiftUp")
    this.shiftQuestionUp.emit(this.formField);
    this.ordinal--;
  }

  onShiftDown() {
    console.log("question.OnShiftDown")
    this.shiftQuestionDown.emit(this.formField);
    this.ordinal++;
  }
}
