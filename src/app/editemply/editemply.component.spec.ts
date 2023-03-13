import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemplyComponent } from './editemply.component';

describe('EditemplyComponent', () => {
  let component: EditemplyComponent;
  let fixture: ComponentFixture<EditemplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditemplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditemplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
