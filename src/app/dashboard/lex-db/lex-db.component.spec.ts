import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LexDbComponent } from './lex-db.component';

describe('LexDbComponent', () => {
  let component: LexDbComponent;
  let fixture: ComponentFixture<LexDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LexDbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LexDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
