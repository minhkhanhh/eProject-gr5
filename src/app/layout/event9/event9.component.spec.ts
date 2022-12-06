import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Event9Component } from './event9.component';

describe('Event9Component', () => {
  let component: Event9Component;
  let fixture: ComponentFixture<Event9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Event9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Event9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
