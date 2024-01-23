import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  showUserMenu = false;
  constructor(private userService: UserService) {}

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  logout() {
    this.userService.logout();
  }
}
