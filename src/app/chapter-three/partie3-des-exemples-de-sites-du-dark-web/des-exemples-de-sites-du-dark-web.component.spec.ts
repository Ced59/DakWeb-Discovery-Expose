import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesExemplesDeSitesDuDarkWebComponent } from './des-exemples-de-sites-du-dark-web.component';

describe('DesExemplesDeSitesDuDarkWebComponent', () => {
  let component: DesExemplesDeSitesDuDarkWebComponent;
  let fixture: ComponentFixture<DesExemplesDeSitesDuDarkWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesExemplesDeSitesDuDarkWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesExemplesDeSitesDuDarkWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
