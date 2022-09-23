import { Component, EventEmitter, Input, Output } from '@angular/core';

// Services
import { UsersService } from '../services/users.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent {
  @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(
    private userService: UsersService,
    private counterService: CounterService
  ) {}

  onSetToInactive(id: number) {
    this.userService.userSetToInactive(id);
  }
}
