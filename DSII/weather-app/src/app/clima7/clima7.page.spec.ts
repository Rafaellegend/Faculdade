import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clima7Page } from './clima7.page';

describe('Clima7Page', () => {
  let component: Clima7Page;
  let fixture: ComponentFixture<Clima7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clima7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clima7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
