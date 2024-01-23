import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/core/interfaces/login-form.interface';
import { UserService } from 'src/app/core/services/user.service'; // Asegúrate de que la ruta sea correcta
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public formSubmitted = false;

  public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UserService
  ) { }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
  
    const formValue: LoginForm = {
      email: this.loginForm.get('email')?.value ?? '', 
      password: this.loginForm.get('password')?.value ?? ''
    };
  
    this.usuarioService.login(formValue)
      .subscribe({
        next: (resp) => {
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          Swal.fire('Error', err.error.msg, 'error');
        }
      });
  }
  
}
