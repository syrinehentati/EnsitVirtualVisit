import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePosterComponent } from './table-poster.component';

describe('TablePosterComponent', () => {
  let component: TablePosterComponent;
  let fixture: ComponentFixture<TablePosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablePosterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
