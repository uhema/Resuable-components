import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonResuablesComponent } from './common-resuables.component';

describe('CommonResuablesComponent', () => {
  let component: CommonResuablesComponent;
  let fixture: ComponentFixture<CommonResuablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonResuablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonResuablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
