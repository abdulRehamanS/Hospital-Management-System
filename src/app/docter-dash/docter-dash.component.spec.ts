import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocterDashComponent } from './docter-dash.component';

describe('DocterDashComponent', () => {
  let component: DocterDashComponent;
  let fixture: ComponentFixture<DocterDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocterDashComponent]
    });
    fixture = TestBed.createComponent(DocterDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
