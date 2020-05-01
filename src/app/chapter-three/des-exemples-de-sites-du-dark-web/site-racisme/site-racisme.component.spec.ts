import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteRacismeComponent } from './site-racisme.component';

describe('SiteRacismeComponent', () => {
  let component: SiteRacismeComponent;
  let fixture: ComponentFixture<SiteRacismeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteRacismeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteRacismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
