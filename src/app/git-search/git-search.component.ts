import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { UserService } from '../Services/user.service';

declare var $: any;

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

  search: string;
  listUser: any[];
  totalCount: number;
  notfound: string;
  search_user_data: any;
  searchList: Array<object> = [];
  emptyList: any;
  error: string;
  isCount_Visible: boolean;
  constructor(private userservice: UserService) { }

  ngOnInit() { }
/*   User Search method */

    searchUser() {
    this.searchList = [];
    this.userservice.userList(this.search).subscribe(res => {

      this.totalCount = res.json().total_count;
      this.listUser = res.json().items;
      this.notfound = this.search;
      this.isCount_Visible = true;
      for (let i = 0; i < this.listUser.length / 4 ; i++) {
        // tslint:disable-next-line:no-shadowed-variable
        this.userservice.userDetails(this.listUser[i].login).subscribe(response => {
          this.search_user_data = response.json();
          this.searchList.push(this.search_user_data);
        }, err => {
          this.error = err.json().message;
        });
      }
    }, err => {
      this.isCount_Visible = false;
      this.emptyList = err.json().message;
      this.showNotification('top', 'center', 'Something went to wrong ' + this.emptyList);
    });
  }
  // tslint:disable-next-line:member-ordering
 p = 1;
  // tslint:disable-next-line:member-ordering
  collection: any[ ] = this.searchList;
  keyDownFunction(event, search) {
    if (event.which === 13) {
      if (search !== undefined) {
        this.searchUser();
      } else {
        alert('Something went to wrong');
      }
    }
  }

/*   Notification method */

  showNotification(from: string, align: string, error: string) {
    const type = ['danger'];

    $.notify({
      icon : 'fa fa-exclamation-circle',
      message: error
    }, {
        type: type,
        timer: 1000,
        placement: {
          from: from,
          align: align
        }
      });
  }
}
