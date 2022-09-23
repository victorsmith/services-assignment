export class CounterService {
    activeToInactiveCount = 0;
    inactiveToActiveCount = 0;

    incrementActiveToInactiveCount() {
      this.activeToInactiveCount++
    }
    
    incrementInactiveToActiveCount() {
      this.inactiveToActiveCount++;
    }
  }