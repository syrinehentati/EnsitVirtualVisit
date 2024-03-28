import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPageAvatarComponent } from './edit-page-avatar.component';

describe('EditPageAvatarComponent', () => {
  let component: EditPageAvatarComponent;
  let fixture: ComponentFixture<EditPageAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPageAvatarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPageAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
