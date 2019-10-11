import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
// import { Address } from 'cluster';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;
  post: post[];
  isEdit: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.name = 'Hector';
    this.age = 30;
    this.email = 'testing@gmail.com';
    this.address = {
      street: '50 street st',
      city: 'Boston',
      state: 'Ma'
    };
    this.hobbies = ['Write Code', 'Music', 'Dance'];
    this.hello = 'Hello';
    this.dataService.getPosts().subscribe(post => {
      this.post = post;
    });
  }

  onClick() {
    this.name = 'Aaron';
    this.hobbies.push('New Hobby');
  }
  // addin g
  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }
  // deleting
  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}

interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
