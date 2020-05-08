import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie4LeBitcoinComponent } from './partie4-le-bitcoin.component';

describe('Partie4LeBitcoinComponent', () => {
  let component: Partie4LeBitcoinComponent;
  let fixture: ComponentFixture<Partie4LeBitcoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partie4LeBitcoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partie4LeBitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
