 
import { Repository } from '../repository';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../profile.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-user-profile',
  templateUrl: '../user-profile.component.html',
  providers: [ProfileService],
  styleUrls: ['../user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  searchUsers = true;

  user:User;
  repo:Repository;
  username :string;

  constructor(private profileService:ProfileService, private httpClient:HttpClient) { }

  getProfile(){
    this.profileService.getusername(this.username);
    this.profileService.userInfo();
    this.user = this.profileService.user;

    this.profileService.getrepository(this.username);
  this.repo = this.profileService.repository;
  console.log(this.repo);
  }

  switchSearch() {
    this.searchUsers = !this.searchUsers;
  }

ngOnInit() {

  this.profileService.userInfo();
  this.user = this.profileService.user;

  this.profileService.getrepository(this.username);
  this.repo = this.profileService.repository; 
}

}
