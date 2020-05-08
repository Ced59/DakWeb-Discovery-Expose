import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSurpriseComponent } from './site-surprise.component';

describe('SiteSurpriseComponent', () => {
  let component: SiteSurpriseComponent;
  let fixture: ComponentFixture<SiteSurpriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteSurpriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSurpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
