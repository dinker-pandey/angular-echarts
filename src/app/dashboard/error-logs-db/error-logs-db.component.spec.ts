import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLogsDbComponent } from './error-logs-db.component';

describe('ErrorLogsDbComponent', () => {
  let component: ErrorLogsDbComponent;
  let fixture: ComponentFixture<ErrorLogsDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorLogsDbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorLogsDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
