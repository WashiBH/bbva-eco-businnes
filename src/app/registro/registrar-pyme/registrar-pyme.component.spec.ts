import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPymeComponent } from './registrar-pyme.component';

describe('RegistrarPymeComponent', () => {
  let component: RegistrarPymeComponent;
  let fixture: ComponentFixture<RegistrarPymeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarPymeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPymeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
