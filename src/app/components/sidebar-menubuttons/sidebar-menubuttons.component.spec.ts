import { ComponentFixture, TestBed } from '@angular/core/testing';


import { SidebarMenubuttonsComponent } from './sidebar-menubuttons.component';

describe('SidebarMenubuttonsComponent', () => {
  let component: SidebarMenubuttonsComponent;
  let fixture: ComponentFixture<SidebarMenubuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarMenubuttonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarMenubuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
