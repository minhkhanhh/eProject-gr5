import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Event5Component } from './event5.component';

describe('Event5Component', () => {
  let component: Event5Component;
  let fixture: ComponentFixture<Event5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Event5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Event5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
