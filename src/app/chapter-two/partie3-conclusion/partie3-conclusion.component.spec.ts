import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie3ConclusionComponent } from './partie3-conclusion.component';

describe('Partie3ConclusionComponent', () => {
  let component: Partie3ConclusionComponent;
  let fixture: ComponentFixture<Partie3ConclusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partie3ConclusionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partie3ConclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
