import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVenteArmesComponent } from './site-vente-armes.component';

describe('SiteVenteArmesComponent', () => {
  let component: SiteVenteArmesComponent;
  let fixture: ComponentFixture<SiteVenteArmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteVenteArmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVenteArmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
