import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMisArtefactosComponent } from './show-mis-artefactos.component';

describe('ShowMisArtefactosComponent', () => {
  let component: ShowMisArtefactosComponent;
  let fixture: ComponentFixture<ShowMisArtefactosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMisArtefactosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMisArtefactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
