import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = '';
  password = '';

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {
  }

  signup(user: string, password: string) {
    console.log(`เรียกฟังก์ชัน signup(user=${user}, password=${password})`);
    this.user = user;
    this.password = password;
    this.userservice._saveUser(user, password).subscribe(
      () => {
        this.router.navigate([ '/login' ]);
      },
      error => {
        console.error( error );
      });
  }
}
