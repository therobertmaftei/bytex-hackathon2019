import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidTableComponent } from './table.component';

describe('CandidTableComponent', () => {
  let component: CandidTableComponent;
  let fixture: ComponentFixture<CandidTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CandidTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
