import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Event6Component } from './event6.component';

describe('Event6Component', () => {
  let component: Event6Component;
  let fixture: ComponentFixture<Event6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Event6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Event6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
