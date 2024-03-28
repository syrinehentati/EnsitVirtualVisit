import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageStandComponent } from './main-page-stand.component';

describe('MainPageStandComponent', () => {
  let component: MainPageStandComponent;
  let fixture: ComponentFixture<MainPageStandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageStandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPageStandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
