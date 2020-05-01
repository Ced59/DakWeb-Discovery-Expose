import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphBoldCenterComponent } from './paragraph-bold-center.component';

describe('ParagraphBoldCenterComponent', () => {
  let component: ParagraphBoldCenterComponent;
  let fixture: ComponentFixture<ParagraphBoldCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphBoldCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphBoldCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
