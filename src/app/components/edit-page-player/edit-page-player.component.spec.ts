import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPagePlayerComponent } from './edit-page-player.component';

describe('EditPagePlayerComponent', () => {
  let component: EditPagePlayerComponent;
  let fixture: ComponentFixture<EditPagePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPagePlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPagePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
