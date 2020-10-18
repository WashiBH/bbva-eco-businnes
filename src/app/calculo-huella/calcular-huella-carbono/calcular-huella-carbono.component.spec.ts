import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularHuellaCarbonoComponent } from './calcular-huella-carbono.component';

describe('CalcularHuellaCarbonoComponent', () => {
  let component: CalcularHuellaCarbonoComponent;
  let fixture: ComponentFixture<CalcularHuellaCarbonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcularHuellaCarbonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcularHuellaCarbonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
