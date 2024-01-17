import { Component, Input, OnInit } from '@angular/core';
import { FormField } from '../entities/formField';

@Component({
  selector: 'app-form',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input() formData: FormField[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
