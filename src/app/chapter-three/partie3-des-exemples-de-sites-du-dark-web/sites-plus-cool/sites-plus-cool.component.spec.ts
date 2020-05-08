import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesPlusCoolComponent } from './sites-plus-cool.component';

describe('SitesPlusCoolComponent', () => {
  let component: SitesPlusCoolComponent;
  let fixture: ComponentFixture<SitesPlusCoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesPlusCoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesPlusCoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
