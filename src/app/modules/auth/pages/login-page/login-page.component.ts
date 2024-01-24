import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private authService: AuthService) {}

  loginTest() {
    const credentials = { 
      email: 'test@example.com', // Usa credenciales de prueba
      password: 'password123' 
    };

    this.authService.login(credentials).subscribe(
      response => console.log('Login response:', response),
      error => console.log('Error:', error)
    );
  }
}
