import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPagePosterComponent } from './main-page-poster.component';

describe('MainPagePosterComponent', () => {
  let component: MainPagePosterComponent;
  let fixture: ComponentFixture<MainPagePosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPagePosterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPagePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
