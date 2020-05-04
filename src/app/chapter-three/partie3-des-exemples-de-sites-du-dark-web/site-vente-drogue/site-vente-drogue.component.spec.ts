import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVenteDrogueComponent } from './site-vente-drogue.component';

describe('SiteVenteDrogueComponent', () => {
  let component: SiteVenteDrogueComponent;
  let fixture: ComponentFixture<SiteVenteDrogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteVenteDrogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVenteDrogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
