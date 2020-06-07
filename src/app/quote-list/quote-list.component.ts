import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeelEnum } from '../shared/model/fee-enum';
import { QuotesService } from '../shared/services/quotes.service';
import { PaginatedQuotesListResponse } from '../shared/model/paginated-quotes-list-response';
import { Quote } from '../shared/model/quote';
import { WaitService } from '../shared/services/wait.service';
import { finalize } from 'rxjs/operators';
import { QuoteListQueryParam } from '../shared/model/quote-list-query-param';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  quotes: Quote[];
  public tags: string;
  public id: FeelEnum;
  public header: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private quoteService: QuotesService,
    private waitService: WaitService,
    private cdr: ChangeDetectorRef) {
    this.id = activatedRoute.snapshot.params.id;
    this.quotes = [];
  }

  public ngOnInit() {
    if (this.activatedRoute.snapshot.routeConfig.path === 'authors/:id') {
      this.loadAuthor();
    } else if (this.activatedRoute.snapshot.routeConfig.path === 'feel/:id') {
      this.loadQuotes();
    }
  }

  public getColor() {
    const letters: string[] = 'BCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return {
      'background-color': color
    };
  }

  private loadAuthor() {
    this.waitService.beginWait();
    const queryParam = new QuoteListQueryParam({
      author: this.activatedRoute.snapshot.params.id as string
    });
    this.loadData(queryParam);
  }

  private loadQuotes(): void {
    this.waitService.beginWait();
    const queryParam = new QuoteListQueryParam({
      tags: this.activatedRoute.snapshot.params.id as string
    });
    this.loadData(queryParam);
  }

  private setHeader() {
    this.header = this.quotes.length > 0 ? this.quotes[Math.floor(Math.random() * this.quotes.length)].quote : 'You are great';
  }


  private loadData(queryParam: QuoteListQueryParam) {
    this.quoteService.getQuotesList(queryParam)
      .pipe(finalize(() => {
        this.waitService.endWait();
      })).subscribe((response: PaginatedQuotesListResponse) => {
        this.quotes = response.results.filter(q => q.quote.length < 100);
        this.setHeader();
      });
  }
}
