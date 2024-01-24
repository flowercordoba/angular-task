import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent {

  constructor(private userService: UserService) {}

  updateProfileTest() {
    const updatedUserData = {
      // Proporciona aquí los campos necesarios para actualizar el perfil
      name: 'Nuevo Nombre',
      email: 'nuevoemail@example.com',
      // otros campos...
    };
    const updatedUserDatad = {
      // Proporciona aquí los campos necesarios para actualizar el perfil
      name: 'Nuevo Nombre',
      email: 'nuevoemail@example.com',
      // otros campos...
    };
    
    this.userService.UpdateUser(updatedUserData,updatedUserDatad).subscribe(
      response => console.log('Profile update response:', response),
      error => console.log('Error:', error)
    );
  }
}
