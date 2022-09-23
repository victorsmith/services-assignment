import { Injectable } from "@angular/core";

// Services
import { CounterService } from "./counter.service";

@Injectable()
export class UsersService {
  activeUsers = ["A", "B"];
  inactiveUsers = ["C", "D"];

  constructor(private counterService: CounterService) {}

  userSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactiveCount()
  }

  userSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToActiveCount();
  }
}
