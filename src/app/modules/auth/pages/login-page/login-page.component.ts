import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  {
  public formSubmitted = false;
  public loginForm = this.fb.group({
    email: [ localStorage.getItem('email') || '' , [ Validators.required, Validators.email ] ],
    password: ['', Validators.required ],
    remember: [false]
  });

  constructor(
    private authService: AuthService, 
    private fb: FormBuilder,
    private router: Router,
    
    ) {}

  
  login() {
    this.formSubmitted = true;
  
    if (this.loginForm.invalid) {
      return; // Si el formulario es inválido, no proceder.
    }
  
    // Asegúrate de que el valor obtenido de localStorage no sea null
    // proporcionando una cadena vacía como valor predeterminado.
    const email = this.loginForm.get('email')?.value || '';
    const password = this.loginForm.get('password')?.value || '';
  
    // Asumiendo que email y password son strings no nulos
    // ya que se verificó que el formulario no es inválido.
    this.authService.login({ email, password }).subscribe({
      next: (resp) => {
        // Guarda el token en localStorage
        // Asegúrate de que resp.token sea de tipo string para evitar errores.
        // if (typeof resp.token === 'string') {
        //   localStorage.setItem('token', resp.token);
        // }
        if (resp.token) {
          localStorage.setItem('token', resp.token);
          console.log('Token:', resp.token); // Muestra el token en la consola
        }

  
        // Navegar al Dashboard
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        // Si sucede un error
        Swal.fire('Error', err.error.msg, 'error');
      }
    });
  }
  

}
