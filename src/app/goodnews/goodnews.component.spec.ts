import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodnewsComponent } from './goodnews.component';

describe('GoodnewsComponent', () => {
  let component: GoodnewsComponent;
  let fixture: ComponentFixture<GoodnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
