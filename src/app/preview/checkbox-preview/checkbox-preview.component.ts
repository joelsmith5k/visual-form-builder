import { Component, Input, OnInit } from '@angular/core';
import { FormField } from 'src/app/entities/formField';

@Component({
  selector: 'checkbox-preview',
  templateUrl: './checkbox-preview.component.html',
  styleUrls: ['./checkbox-preview.component.scss']
})
export class CheckboxPreviewComponent implements OnInit {
  @Input() fieldData: FormField = new FormField('checkbox');
  constructor() { }

  ngOnInit(): void {
  }
}
