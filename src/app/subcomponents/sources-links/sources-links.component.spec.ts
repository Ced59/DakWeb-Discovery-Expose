import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesLinksComponent } from './sources-links.component';

describe('SourcesLinksComponent', () => {
  let component: SourcesLinksComponent;
  let fixture: ComponentFixture<SourcesLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcesLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
