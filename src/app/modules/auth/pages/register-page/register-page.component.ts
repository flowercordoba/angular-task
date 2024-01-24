import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterForm } from 'src/app/core/interfaces/register-form.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service'; // Asegúrate de que la ruta sea correcta
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  public formSubmitted = false;
  
  public registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]], 
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private usuarioService: AuthService,
    private router: Router
  ) { }

  createUser() {
    this.formSubmitted = true;
  
    if (this.registerForm.invalid) {
      return;
    }
  
    const formValue: RegisterForm = {
      name: this.registerForm.value.name!, 
      email: this.registerForm.value.email!,  
      password: this.registerForm.value.password!
    };
  
    this.usuarioService.register(formValue)
      .subscribe({
        next: (resp) => {
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          Swal.fire('Error', err.error.msg, 'error');
        }
      });
  }
  

  invalidField(field: string): boolean {
    if (this.registerForm.get(field)?.invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }
  

}
