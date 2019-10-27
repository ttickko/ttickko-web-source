import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  friends = [
    {
      name: 'Dark Chocolate',
      pic: 'Dark_Chocolate.jpg',
      position: '55 THB',
    },
    {
      name: 'Fresh Milk Tea',
      pic: 'Fresh_Milk_Tea.jpg',
      position: '45 THB',
    },
     {
      name: 'Matcha Latte',
      pic: 'Matcha_Latte.jpg',
      position: '55 THB',
    },
       {
      name: 'Strawberry Cheesecake',
      pic: 'Strawberry_Cheesecake.jpg',
      position: '70 THB',
    },
      {
      name: 'Strawberry',
      pic: 'Strawberry.jpg',
      position: '65 THB',
    }
  ];
  users: any

  constructor(private http: HttpClient) {
    this._getUsers()
  }

  _getUsers() {
    return this.http.post(
      'http://cs.sci.ubu.ac.th:7512/59110440084/user/_search',
      {
        query: {
          /*
          wildcard: {
            user: { value: '*an*' }
          }
          */
        }
      }
    ); /*.subscribe( data => {
      this.users = data['result']['hits']
      console.log(this.users)
    }, error => {});
    */
  }

  _saveUser(usr: string, passwd: string) {
    console.log(`user=${usr} passwd:${passwd}`);
    return this.http.post(
      'http://cs.sci.ubu.ac.th:7512/59110440084/user/_create',
      {
        user: usr,
        password: passwd,
      }
    );
  }

  getFriends() {
    return this.friends;
  }
}
