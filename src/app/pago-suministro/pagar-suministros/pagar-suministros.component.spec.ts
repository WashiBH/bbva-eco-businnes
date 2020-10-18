import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarSuministrosComponent } from './pagar-suministros.component';

describe('PagarSuministrosComponent', () => {
  let component: PagarSuministrosComponent;
  let fixture: ComponentFixture<PagarSuministrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarSuministrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarSuministrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
