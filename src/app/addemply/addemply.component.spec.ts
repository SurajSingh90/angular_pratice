import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemplyComponent } from './addemply.component';

describe('AddemplyComponent', () => {
  let component: AddemplyComponent;
  let fixture: ComponentFixture<AddemplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddemplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddemplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
