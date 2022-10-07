import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarEncodeComponent } from './bar-encode.component';

describe('BarEncodeComponent', () => {
  let component: BarEncodeComponent;
  let fixture: ComponentFixture<BarEncodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarEncodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarEncodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
