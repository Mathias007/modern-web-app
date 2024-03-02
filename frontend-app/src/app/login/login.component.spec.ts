import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, LoginComponent],
      declarations: []
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with required fields', () => {
    const usernameField = fixture.debugElement.nativeElement.querySelector('input[name="username"]');
    const passwordField = fixture.debugElement.nativeElement.querySelector('input[name="password"]');
    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');

    expect(usernameField).toBeTruthy();
    expect(passwordField).toBeTruthy();
    expect(submitButton).toBeTruthy();
    expect(usernameField.getAttribute('required')).toBe('');
    expect(passwordField.getAttribute('required')).toBe('');
  });

  it('should call logowanie() method when form is submitted', () => {
    spyOn(component, 'login');
    const form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.login).toHaveBeenCalled();
  });

  it('should display an error message for invalid login', () => {
    const usernameField = fixture.debugElement.nativeElement.querySelector('input[name="username"]');
    const passwordField = fixture.debugElement.nativeElement.querySelector('input[name="password"]');
    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');

    usernameField.value = 'exampleUser';
    passwordField.value = 'invalidPassword';

    submitButton.click();
    fixture.detectChanges();

    const errorMessage = fixture.debugElement.nativeElement.querySelector('.error-message');
    expect(errorMessage.textContent).toBe("Invalid username or password");
  });

  it('should log in for valid username and password', () => {
    const usernameField = fixture.debugElement.nativeElement.querySelector('input[name="username"]');
    const passwordField = fixture.debugElement.nativeElement.querySelector('input[name="password"]');
    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');
  
    usernameField.value = 'exampleUser';
    passwordField.value = 'examplePassword';
  
    submitButton.click();
    fixture.detectChanges();
  
    const errorMessage = fixture.debugElement.nativeElement.querySelector('.error-message');
    expect(errorMessage.textContent).toBe("Login successfull!");
  });
});
