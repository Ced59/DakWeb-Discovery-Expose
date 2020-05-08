import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie5DevDarkWebComponent } from './partie5-dev-dark-web.component';

describe('Partie5DevDarkWebComponent', () => {
  let component: Partie5DevDarkWebComponent;
  let fixture: ComponentFixture<Partie5DevDarkWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partie5DevDarkWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partie5DevDarkWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
