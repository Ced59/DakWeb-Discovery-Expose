import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie2LesHiddenWikisComponent } from './partie2-les-hidden-wikis.component';

describe('Partie2LesHiddenWikisComponent', () => {
  let component: Partie2LesHiddenWikisComponent;
  let fixture: ComponentFixture<Partie2LesHiddenWikisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partie2LesHiddenWikisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partie2LesHiddenWikisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
