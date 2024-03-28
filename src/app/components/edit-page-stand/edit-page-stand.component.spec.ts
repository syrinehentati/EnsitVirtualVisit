import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPageStandComponent } from './edit-page-stand.component';

describe('EditPageStandComponent', () => {
  let component: EditPageStandComponent;
  let fixture: ComponentFixture<EditPageStandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPageStandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPageStandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
