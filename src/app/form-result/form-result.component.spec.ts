import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormResultComponent } from './form-result.component';

describe('FormPreviewComponent', () => {
  let component: FormResultComponent;
  let fixture: ComponentFixture<FormResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});