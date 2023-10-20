import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocterLoginComponent } from './docter-login.component';

describe('DocterLoginComponent', () => {
  let component: DocterLoginComponent;
  let fixture: ComponentFixture<DocterLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocterLoginComponent]
    });
    fixture = TestBed.createComponent(DocterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
