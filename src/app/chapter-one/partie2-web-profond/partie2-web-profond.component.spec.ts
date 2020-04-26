import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie2WebProfondComponent } from './partie2-web-profond.component';

describe('Partie2WebProfondComponent', () => {
  let component: Partie2WebProfondComponent;
  let fixture: ComponentFixture<Partie2WebProfondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partie2WebProfondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partie2WebProfondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
