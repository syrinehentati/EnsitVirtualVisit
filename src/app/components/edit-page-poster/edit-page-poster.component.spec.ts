import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPagePosterComponent } from './edit-page-poster.component';

describe('EditPagePosterComponent', () => {
  let component: EditPagePosterComponent;
  let fixture: ComponentFixture<EditPagePosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPagePosterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPagePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
