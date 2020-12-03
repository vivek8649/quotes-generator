export class QuoteListQueryParam {
  public tags: string;
  public author: string;
  public order = 'likes';
  public limit = 100;
  public lang = 'en';

  constructor(quoteListQueryParam: Partial<QuoteListQueryParam>) {
    Object.assign(this, quoteListQueryParam);
  }
}
