import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidSelectComponent } from './select.component';

describe('CandidSelectComponent', () => {
  let component: CandidSelectComponent;
  let fixture: ComponentFixture<CandidSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CandidSelectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
