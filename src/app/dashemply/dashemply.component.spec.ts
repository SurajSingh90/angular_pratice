import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashemplyComponent } from './dashemply.component';

describe('DashemplyComponent', () => {
  let component: DashemplyComponent;
  let fixture: ComponentFixture<DashemplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashemplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashemplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
