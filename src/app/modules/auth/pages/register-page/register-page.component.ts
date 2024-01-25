import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent  {
  public formSubmitted = false;
  public registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    repassword: ['', [Validators.required, Validators.minLength(6)]],
    termino: [false, Validators.required]
  }, {
    validators: this.passwordsIguales('password', 'repassword')
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}



  // crearUser() {


  //   this.formSubmitted = true;
  //   console.log( this.registerForm.value );

  //   if ( this.registerForm.invalid ) {
  //     return;
  //   }

  //   this.authService.register( this.registerForm.value )
  //       .subscribe( resp => {
          
  //         // Navegar al Dashboard
  //         this.router.navigateByUrl('/');

  //       }, (err) => {
  //         // Si sucede un error
  //         Swal.fire('Error', err.error.msg, 'error' );
  //       });
    
  // }

  crearUser() {
    this.formSubmitted = true;
  
    if (this.registerForm.invalid) {
      return;
    }
  
    this.authService.register(this.registerForm.value)
      .subscribe({
        next: (resp) => {
          localStorage.setItem('token', resp.token); 
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          Swal.fire('Error', err.error.msg, 'error');
        }
      });
  }

  contrasenasNoValidas(): boolean {
    const pass1 = this.registerForm.get('password')!.value;
    const pass2 = this.registerForm.get('repassword')!.value;

    return pass1 !== pass2 && this.formSubmitted;
  }

  aceptaTerminos(): boolean {
    return !this.registerForm.get('termino')?.value && this.formSubmitted;
  }

  passwordsIguales(pass1Name: string, pass2Name: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if (pass1Control?.value === pass2Control?.value) {
        pass2Control?.setErrors(null);
      } else {
        pass2Control?.setErrors({ noEsIgual: true });
      }
    };
  }
  campoNoValidate(campo: string): boolean {
    const control = this.registerForm.get(campo);
    return control ? control.invalid && this.formSubmitted : false;
  }
  
}
