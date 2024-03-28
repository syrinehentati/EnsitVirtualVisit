import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStandComponent } from './table-stand.component';

describe('TableStandComponent', () => {
  let component: TableStandComponent;
  let fixture: ComponentFixture<TableStandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableStandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableStandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
