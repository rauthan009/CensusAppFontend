import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverPanelComponent } from './approver-panel.component';

describe('ApproverPanelComponent', () => {
  let component: ApproverPanelComponent;
  let fixture: ComponentFixture<ApproverPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproverPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproverPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
