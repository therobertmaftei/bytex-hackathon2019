import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidRadioComponent } from './radio.component';

describe('CandidRadioComponent', () => {
  let component: CandidRadioComponent;
  let fixture: ComponentFixture<CandidRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CandidRadioComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
