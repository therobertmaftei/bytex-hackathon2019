import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidInputComponent } from './input.component';

describe('InputComponent', () => {
  let component: CandidInputComponent;
  let fixture: ComponentFixture<CandidInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CandidInputComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
