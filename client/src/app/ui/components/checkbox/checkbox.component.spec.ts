import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidCheckboxComponent } from './checkbox.component';

describe('CandidCheckboxComponent', () => {
  let component: CandidCheckboxComponent;
  let fixture: ComponentFixture<CandidCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CandidCheckboxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
