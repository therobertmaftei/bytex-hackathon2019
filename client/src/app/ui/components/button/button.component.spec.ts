import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidButtonComponent } from './button.component';

describe('CandidButtonComponent', () => {
  let component: CandidButtonComponent;
  let fixture: ComponentFixture<CandidButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CandidButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
