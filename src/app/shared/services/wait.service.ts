import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class WaitService {
  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {

  }

  public beginWait(): void {
    this.status.next(true);
  }

  public endWait(): void {
    this.status.next(false);
  }

}
