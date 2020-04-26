import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter1TitleComponent } from './chapter1-title.component';

describe('Chapter1TitleComponent', () => {
  let component: Chapter1TitleComponent;
  let fixture: ComponentFixture<Chapter1TitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter1TitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter1TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
