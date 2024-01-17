import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MAT
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { InputPreviewComponent } from './preview/input-preview/input-preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxPreviewComponent } from './preview/checkbox-preview/checkbox-preview.component';

import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormPreviewComponent } from './form-preview/form-preview.component';
import { FormResultComponent } from './form-result/form-result.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { QuestionComponent } from './question/question.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { DeleteDialogComponent } from './form-builder/dialog/delete-dialog/delete-dialog.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    FormPreviewComponent,
    FormResultComponent,
    PreviewComponent,
    InputPreviewComponent,
    CheckboxPreviewComponent,
    QuestionComponent,
    DeleteDialogComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
