import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class UserService {
  typing: String;

  constructor(private http : Http) { }
  
   /* gitapi maximum request limit 60 request  per hour */

   private gitApi : String = "https://api.github.com/search/users?q="
   private user : String = "https://api.github.com/users/"

   userList(typing){
      let url = this.gitApi.concat(typing)
      let header = new Headers({
        'Content-Type':'application/json'
      })
      return this.http.get(url,{headers : header})
   }

   userDetails(loginId){
      let url = this.user.concat(loginId)
      let header = new Headers({
        'Content-Type':'application/json'
      })
     return this.http.get(url,{headers : header})
   }


 
}
