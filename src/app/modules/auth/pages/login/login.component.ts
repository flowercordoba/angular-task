import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private _authService = inject(AuthService);
  private router = inject(Router);

  public form: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(4)]],
  });

  login() {
    const { email, password } = this.form.value;

    this._authService.login(email, password).subscribe({
      next: () => this.router.navigateByUrl("/home"),
      error: (message) => {
        Swal.fire("Error", message, "error");
      },
    });
  }
}
