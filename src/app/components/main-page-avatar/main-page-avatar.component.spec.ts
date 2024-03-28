import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageAvatarComponent } from './main-page-avatar.component';

describe('MainPageAvatarComponent', () => {
  let component: MainPageAvatarComponent;
  let fixture: ComponentFixture<MainPageAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageAvatarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPageAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
