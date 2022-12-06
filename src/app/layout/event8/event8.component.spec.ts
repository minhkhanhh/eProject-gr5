import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Event8Component } from './event8.component';

describe('Event8Component', () => {
  let component: Event8Component;
  let fixture: ComponentFixture<Event8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Event8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Event8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
