import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedbackComponent } from './news-feedback.component';

describe('NewsFeedbackComponent', () => {
  let component: NewsFeedbackComponent;
  let fixture: ComponentFixture<NewsFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsFeedbackComponent]
    });
    fixture = TestBed.createComponent(NewsFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
