import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService._getUsers().subscribe(
      (data: any) => {
        this.users = data.result.hits;
        console.log(this.users);
        for (const u of this.users) {
          // console.log(u['source'])
          // console.log(u._source)
          console.log(u._source.user);
        }
      },
      error => {

      }
    );
  }

}
