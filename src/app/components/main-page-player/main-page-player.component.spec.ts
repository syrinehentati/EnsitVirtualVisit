import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPagePlayerComponent } from './main-page-player.component';

describe('MainPagePlayerComponent', () => {
  let component: MainPagePlayerComponent;
  let fixture: ComponentFixture<MainPagePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPagePlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPagePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
