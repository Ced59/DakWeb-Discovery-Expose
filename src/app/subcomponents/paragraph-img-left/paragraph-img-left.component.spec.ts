import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphImgLeftComponent } from './paragraph-img-left.component';

describe('ParagraphImgLeftComponent', () => {
  let component: ParagraphImgLeftComponent;
  let fixture: ComponentFixture<ParagraphImgLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphImgLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphImgLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
