import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { WaitService } from './shared/services/wait.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'quotes-generator';
  public showLoader: boolean;

  constructor(
    private waitService: WaitService,
    private cdr: ChangeDetectorRef) {
    this.showLoader = true;
  }

  public ngOnInit() {
    // this.cdr.detectChanges();
    this.waitService.status.subscribe((isLoading: boolean) => {
      setTimeout(() => {
        this.showLoader = isLoading;
      });
    });

  }

  public ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}
