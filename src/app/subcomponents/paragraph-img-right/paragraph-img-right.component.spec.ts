import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphImgRightComponent } from './paragraph-img-right.component';

describe('ParagraphImgRightComponent', () => {
  let component: ParagraphImgRightComponent;
  let fixture: ComponentFixture<ParagraphImgRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphImgRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphImgRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
