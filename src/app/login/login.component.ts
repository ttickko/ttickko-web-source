import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(user: string, password: string) {
    // console.log(`เรียกฟังก์ชัน login(user=${user}, password=${password})`);
    if (user === 'admin') {
      console.log('ยินดีต้อนรับ admin');
    } else {
      console.log(`ยินดีต้อนรับคุณ ${user}`);
    }
  }
}
