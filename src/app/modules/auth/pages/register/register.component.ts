import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private _authService = inject(AuthService);
  private router = inject(Router);

  public form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });

  register() {
    const { name, email, password } = this.form.value;

    this._authService.register(name, email, password)
      .subscribe({
        next: () => {
          Swal.fire('Registro exitoso', 'Ahora puedes iniciar sesión', 'success');
          this.router.navigateByUrl('/home');
        },
        error: (message) => {
          Swal.fire('Error', message, 'error');
        }
      });
  }
}
