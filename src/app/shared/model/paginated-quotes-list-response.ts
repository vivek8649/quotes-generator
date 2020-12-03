import { Quote } from './quote';

export class PaginatedQuotesListResponse {
  public next: string;
  public previous: string;
  public results: Quote[];
}
