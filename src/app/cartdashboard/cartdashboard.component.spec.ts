import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartdashboardComponent } from './cartdashboard.component';

describe('CartdashboardComponent', () => {
  let component: CartdashboardComponent;
  let fixture: ComponentFixture<CartdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
