import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePornographiquesComponent } from './site-pornographiques.component';

describe('SitePornographiquesComponent', () => {
  let component: SitePornographiquesComponent;
  let fixture: ComponentFixture<SitePornographiquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitePornographiquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitePornographiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
