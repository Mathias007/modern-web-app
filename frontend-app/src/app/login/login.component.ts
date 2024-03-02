import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

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

  login() {
    if (
      this.formData.username === 'exampleUser' 
      && this.formData.password === 'examplePassword'
      ) {
        this.errorMessage = 'Login successfull!';
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
