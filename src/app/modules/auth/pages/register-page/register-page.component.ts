import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  constructor(private authService: AuthService) {}

  registerTest() {
    const userData = {
      email: 'newuser@example.com', // Datos de prueba para el registro
      password: 'password123',
      // Agrega aquí otros campos necesarios para el registro
    };

    this.authService.register(userData).subscribe(
      response => console.log('Register response:', response),
      error => console.log('Error:', error)
    );
  }
}
