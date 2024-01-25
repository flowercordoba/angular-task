// src/app/components/profile/profile.component.ts

import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/core/interfaces/user.profile';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userProfile: UserProfile | null = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.loadUserProfile();
    this.userService.userProfile.subscribe(
      (profile) => (this.userProfile = profile)
    );
  }
}
