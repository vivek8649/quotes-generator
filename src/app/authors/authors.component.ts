import { Component, OnInit } from '@angular/core';
import { Tile } from '../shared/model/tile';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  public authors: Tile[] = [
    { text: 'Mahatma Gandhi', cols: 1, rows: 1, color: 'lightblue', id: 'Mahatma Gandhi' },
    { text: 'Buddha', cols: 1, rows: 1, color: 'lightgreen', id: 'Buddha' },
    { text: 'Socrates', cols: 1, rows: 1, color: 'lightpink', id: 'Socrates' },
    { text: 'Alan Watts', cols: 1, rows: 1, color: '#DDBDF1', id: 'Alan Watts' },
    { text: 'Bruce Lee', cols: 1, rows: 1, color: 'lightblue', id: 'Bruce Lee' },
    { text: 'Acharya Prashant', cols: 1, rows: 1, color: 'lightgreen', id: 'Acharya Prashant' },
    { text: 'Swami Vivekananda', cols: 1, rows: 1, color: 'lightpink', id: 'Swami Vivekananda' },
    { text: 'Krishna', cols: 1, rows: 1, color: '#DDBDF1', id: 'Krishna' },
    { text: 'Osho', cols: 1, rows: 1, color: 'lightblue', id: 'Osho' }
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  public ngOnInit(): void {

  }

  public navigateToQuoteList(event: Event) {
    this.router.navigate(['/authors/', (event.target as HTMLInputElement).value]);
  }

}
