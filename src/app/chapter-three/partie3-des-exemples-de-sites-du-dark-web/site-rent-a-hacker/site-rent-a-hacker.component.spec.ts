import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteRentAHackerComponent } from './site-rent-a-hacker.component';

describe('SiteRentAHackerComponent', () => {
  let component: SiteRentAHackerComponent;
  let fixture: ComponentFixture<SiteRentAHackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteRentAHackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteRentAHackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
