import { Component } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  showUserMenu = false;
  constructor(private authService: AuthService) {}


  
  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  

 

}
