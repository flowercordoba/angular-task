import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { data } from "autoprefixer";
import { UserService } from "src/app/core";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  showUserMenu = false;
  constructor(private userService: UserService
    ) {}


  ngOnInit() {
    this.userService.getUserProfile(data).subscribe(
      valido => console.log('Token válido:', valido),
      error => console.error('Error al validar token:', error)
    );
  }
  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  logout() {
    this.userService.logout();
  }
}
