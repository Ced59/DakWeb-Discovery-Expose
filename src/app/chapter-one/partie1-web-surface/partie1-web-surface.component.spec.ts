import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie1WebSurfaceComponent } from './partie1-web-surface.component';

describe('Partie1WebSurfaceComponent', () => {
  let component: Partie1WebSurfaceComponent;
  let fixture: ComponentFixture<Partie1WebSurfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partie1WebSurfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partie1WebSurfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
