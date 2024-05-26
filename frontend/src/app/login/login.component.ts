import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  formData = {
    username: '',
    password: ''
  };

  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (
      this.formData.username === 'exampleUser' 
      && this.formData.password === 'examplePassword'
    ) {
      this.errorMessage = '';
      this.successMessage = 'Login successful!';
      this.authService.login();
      this.router.navigate(['/dashboard']);
    } else {
      this.successMessage = '';
      this.errorMessage = 'Invalid username or password';
    }
  }
}
