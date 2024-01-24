import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/core/services/current.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private currentUserService: CurrentUserService) {}

  ngOnInit() {
    this.getCurrentUserProfile();
  }

  getCurrentUserProfile() {
    this.currentUserService.getCurrentUser().subscribe(
      response => console.log('Current user profile:', response),
      error => console.log('Error:', error)
    );
  }
}
