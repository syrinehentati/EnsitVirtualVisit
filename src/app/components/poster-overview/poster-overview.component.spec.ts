import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterOverviewComponent } from './poster-overview.component';

describe('PosterOverviewComponent', () => {
  let component: PosterOverviewComponent;
  let fixture: ComponentFixture<PosterOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PosterOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PosterOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
