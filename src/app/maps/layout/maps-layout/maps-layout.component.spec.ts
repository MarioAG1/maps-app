import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsLayoutComponent } from './maps-layout.component';

describe('MapsLayoutComponent', () => {
  let component: MapsLayoutComponent;
  let fixture: ComponentFixture<MapsLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapsLayoutComponent]
    });
    fixture = TestBed.createComponent(MapsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
