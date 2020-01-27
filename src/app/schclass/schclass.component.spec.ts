import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchclassComponent } from './schclass.component';

describe('SchclassComponent', () => {
  let component: SchclassComponent;
  let fixture: ComponentFixture<SchclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
