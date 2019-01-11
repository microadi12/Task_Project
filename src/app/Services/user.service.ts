import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class UserService {
  typing: String;

  constructor(private http: Http) { }
   /* gitapi maximum request limit 60 request  per hour */

   private gitApi: String = 'https://api.github.com/search/users?q=';
   private user: String = 'https://api.github.com/users/';

   userList(typing: string) {
      const url = this.gitApi.concat(typing);
      const header = new Headers({
        'Content-Type': 'application/json'
      });
      return this.http.get(url, {headers : header});
   }

   userDetails(loginId: string) {
      const url = this.user.concat(loginId);
      const header = new Headers({
        'Content-Type': 'application/json'
      });
     return this.http.get(url, {headers : header});
   }
}
