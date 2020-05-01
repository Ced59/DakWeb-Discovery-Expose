import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie2TorComponent } from './partie2-tor.component';

describe('Partie2TorComponent', () => {
  let component: Partie2TorComponent;
  let fixture: ComponentFixture<Partie2TorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partie2TorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partie2TorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
