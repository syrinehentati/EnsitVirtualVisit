import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandOverviewComponent } from './stand-overview.component';

describe('StandOverviewComponent', () => {
  let component: StandOverviewComponent;
  let fixture: ComponentFixture<StandOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StandOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
