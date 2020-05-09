import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionVideoComponent } from './conclusion-video.component';

describe('ConclusionVideoComponent', () => {
  let component: ConclusionVideoComponent;
  let fixture: ComponentFixture<ConclusionVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConclusionVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConclusionVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
