import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGlobalComponent } from './login-global.component';

describe('LoginGlobalComponent', () => {
  let component: LoginGlobalComponent;
  let fixture: ComponentFixture<LoginGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
