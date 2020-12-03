import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaginatedQuotesListResponse } from '../model/paginated-quotes-list-response';
import { Observable, of } from 'rxjs';
import { map, expand, scan } from 'rxjs/operators';
import { Quote } from '@angular/compiler';
import { QuoteListQueryParam } from '../model/quote-list-query-param';
import { CommonUtilService } from './common-util.service';

@Injectable()
export class QuotesService {
  public baseUrl = 'https://api.paperquotes.com';

  constructor(private http: HttpClient) { }

  public getAllQuotesListByTags(tags): Observable<PaginatedQuotesListResponse | any[]> {
    return this.getQuotesList(tags).pipe(
      expand((data: PaginatedQuotesListResponse) => {
        this.baseUrl = data.next ? data.next : this.baseUrl;
        return data.next ? this.getQuotesList(tags) : of();
      })).pipe(
        scan((acc, data) => {
          return [...acc, ...data.results];
        }, [])
      );
  }

  public getQuotesList(params: QuoteListQueryParam): Observable<PaginatedQuotesListResponse> {
    return this.http.get(this.baseUrl + '/apiv1/quotes/', { params: CommonUtilService.createHttpParams(params) }).pipe(
      map((res: PaginatedQuotesListResponse) => res)
    );
  }

}
