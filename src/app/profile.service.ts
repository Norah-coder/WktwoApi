import { Repository } from './repository';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './user'
import { environment } from '../environments/environment';
import  'rxjs/add/operator/map'
export class ProfileService {
  user: User; 
  repository :Repository;
  private userName: string;

  apiKey: string = environment.apikey
  getrepository: any;
  get: any;
  getusername: any;

  constructor(private http:HttpClient) {

    this.user = new User ('', '', '', '', 0, 0, 0);
    this.repository = new Repository('', '', '');
    this.userName = 'Jerry Nabango';
  }

  // getting profile info including the username, followers and following and the profile picture
  userInfo(){
    interface ApiResponse{
      login: string;
      public_repos: number;
      avatar_url : any;
      html_url: string;
      name : string;
      following : number;
      followers : number;
    }

    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName + '?access_token='+ this.apiKey).toPromise().then(res =>{
        this.user.login = res.login;
        this.user.avatar_url = res.avatar_url;
        this.user.html_url = res.html_url;
        this.user.name = res.name;
        this.user.followers = res.followers;
        this.user.following = res.following;
        this.user.public_repository = res.public_repos;

        resolve()
      }, error =>{
        this.user.name = "User name cannot be found"
        this.user.avatar_url= "Can't load image"
        this.user.html_url = "404 page not found"
        this.user.followers = 0
        this.user.following = 0

        reject(error)
      })
      
    })
    return promise
  }

  // 

}
