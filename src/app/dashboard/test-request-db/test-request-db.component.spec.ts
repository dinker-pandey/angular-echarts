import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRequestDbComponent } from './test-request-db.component';

describe('TestRequestDbComponent', () => {
  let component: TestRequestDbComponent;
  let fixture: ComponentFixture<TestRequestDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRequestDbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRequestDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
