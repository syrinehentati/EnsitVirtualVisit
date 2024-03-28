import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestgameheaderComponent } from './testgameheader.component';

describe('TestgameheaderComponent', () => {
  let component: TestgameheaderComponent;
  let fixture: ComponentFixture<TestgameheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestgameheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestgameheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
