import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVenteFausseIdentiteComponent } from './site-vente-fausse-identite.component';

describe('SiteVenteFausseIdentiteComponent', () => {
  let component: SiteVenteFausseIdentiteComponent;
  let fixture: ComponentFixture<SiteVenteFausseIdentiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteVenteFausseIdentiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVenteFausseIdentiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
