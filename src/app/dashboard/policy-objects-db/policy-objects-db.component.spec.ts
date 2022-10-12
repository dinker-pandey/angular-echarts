import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyObjectsDbComponent } from './policy-objects-db.component';

describe('PolicyObjectsDbComponent', () => {
  let component: PolicyObjectsDbComponent;
  let fixture: ComponentFixture<PolicyObjectsDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyObjectsDbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyObjectsDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
