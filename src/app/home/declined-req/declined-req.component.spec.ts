import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclinedReqComponent } from './declined-req.component';

describe('DeclinedReqComponent', () => {
  let component: DeclinedReqComponent;
  let fixture: ComponentFixture<DeclinedReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclinedReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclinedReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
