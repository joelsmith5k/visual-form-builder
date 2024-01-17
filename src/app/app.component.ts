import { Component } from '@angular/core';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormPreviewComponent } from './form-preview/form-preview.component';
import { FormResultComponent } from './form-result/form-result.component';
import { FormField } from './entities/formField';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  formData: FormField[] = [];

}
