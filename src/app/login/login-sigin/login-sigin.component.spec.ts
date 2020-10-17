import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSiginComponent } from './login-sigin.component';

describe('LoginSiginComponent', () => {
  let component: LoginSiginComponent;
  let fixture: ComponentFixture<LoginSiginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSiginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSiginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
