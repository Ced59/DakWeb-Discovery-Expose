import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVenteFauxBilletsComponent } from './site-vente-faux-billets.component';

describe('SiteVenteFauxBilletsComponent', () => {
  let component: SiteVenteFauxBilletsComponent;
  let fixture: ComponentFixture<SiteVenteFauxBilletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteVenteFauxBilletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVenteFauxBilletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
