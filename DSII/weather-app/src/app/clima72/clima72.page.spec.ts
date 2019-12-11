import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clima72Page } from './clima72.page';

describe('Clima72Page', () => {
  let component: Clima72Page;
  let fixture: ComponentFixture<Clima72Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clima72Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clima72Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
