import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordVendorComponent } from './dashbord-vendor.component';

describe('DashbordVendorComponent', () => {
  let component: DashbordVendorComponent;
  let fixture: ComponentFixture<DashbordVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
