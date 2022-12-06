import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Event7Component } from './event7.component';

describe('Event7Component', () => {
  let component: Event7Component;
  let fixture: ComponentFixture<Event7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Event7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Event7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
