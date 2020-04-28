import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie3LesDarknetsComponent } from './partie3-les-darknets.component';

describe('Partie3LesDarknetsComponent', () => {
  let component: Partie3LesDarknetsComponent;
  let fixture: ComponentFixture<Partie3LesDarknetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partie3LesDarknetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partie3LesDarknetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
