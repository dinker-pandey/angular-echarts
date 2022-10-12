import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerStatusDbComponent } from './server-status-db.component';

describe('ServerStatusDbComponent', () => {
  let component: ServerStatusDbComponent;
  let fixture: ComponentFixture<ServerStatusDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerStatusDbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerStatusDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
