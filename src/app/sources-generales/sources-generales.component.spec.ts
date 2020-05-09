import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesGeneralesComponent } from './sources-generales.component';

describe('SourcesGeneralesComponent', () => {
  let component: SourcesGeneralesComponent;
  let fixture: ComponentFixture<SourcesGeneralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcesGeneralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
