import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedReqComponent } from './approved-req.component';

describe('ApprovedReqComponent', () => {
  let component: ApprovedReqComponent;
  let fixture: ComponentFixture<ApprovedReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
