import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie1SeConnecterComponent } from './partie1-se-connecter.component';

describe('Partie1SeConnecterComponent', () => {
  let component: Partie1SeConnecterComponent;
  let fixture: ComponentFixture<Partie1SeConnecterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partie1SeConnecterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partie1SeConnecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
