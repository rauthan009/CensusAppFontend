import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NPRComponent } from './npr.component';

describe('NPRComponent', () => {
  let component: NPRComponent;
  let fixture: ComponentFixture<NPRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NPRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NPRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
