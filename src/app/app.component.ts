import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;

  }
}
