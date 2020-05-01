import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie1LesVpnComponent } from './partie1-les-vpn.component';

describe('Partie1LesVpnComponent', () => {
  let component: Partie1LesVpnComponent;
  let fixture: ComponentFixture<Partie1LesVpnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partie1LesVpnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partie1LesVpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
