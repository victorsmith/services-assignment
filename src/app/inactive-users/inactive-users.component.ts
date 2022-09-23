import { Component, EventEmitter, Input, Output } from '@angular/core';

// Services
import { CounterService } from '../services/counter.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent {
  @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  
  constructor(
    private userService: UsersService,
    private counterService: CounterService
  ) {}

  onSetToActive(id: number) {
    this.userService.userSetToActive(id);
  }
}
