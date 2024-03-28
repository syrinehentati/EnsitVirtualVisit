import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarOverviewComponent } from './avatar-overview.component';

describe('AvatarOverviewComponent', () => {
  let component: AvatarOverviewComponent;
  let fixture: ComponentFixture<AvatarOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvatarOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvatarOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
