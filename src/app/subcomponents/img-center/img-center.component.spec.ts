import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCenterComponent } from './img-center.component';

describe('ImgCenterComponent', () => {
  let component: ImgCenterComponent;
  let fixture: ComponentFixture<ImgCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
