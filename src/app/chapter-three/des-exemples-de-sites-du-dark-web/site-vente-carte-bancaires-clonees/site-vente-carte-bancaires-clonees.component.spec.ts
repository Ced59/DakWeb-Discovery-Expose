import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVenteCarteBancairesCloneesComponent } from './site-vente-carte-bancaires-clonees.component';

describe('SiteVenteCarteBancairesCloneesComponent', () => {
  let component: SiteVenteCarteBancairesCloneesComponent;
  let fixture: ComponentFixture<SiteVenteCarteBancairesCloneesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteVenteCarteBancairesCloneesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVenteCarteBancairesCloneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
