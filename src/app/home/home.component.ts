import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public quoteList: string[];
  public displayedQuote: string;

  constructor() { }

  ngOnInit(): void {
    this.getQuotes();
    this.showNextQuote();
  }

  public showNextQuote() {
    this.displayedQuote = this.quoteList[Math.floor(Math.random() * this.quoteList.length)];
  }

  private getQuotes() {
    this.quoteList = [
      'Genius is 1% inspiration and 99% perspiration.',
      'Your life does not get better by chance. It gets better by change.',
      'you are never too old to set another goal or to dream a new dream.',
      `if you always put limit on everything you do, physical or anything else.
      it will spread into your work and into your life. there are no limits. there are only plateaus,
      and you must not stay there, you must go beyond them.`,
      'if you can dream it, you can do it.',
      'never give up, for that is just the place and time that the tide will turn.',
      `if you always put limit on everything you do, physical or anything else.
      it will spread into your work and into your life. there are no limits.
      there are only plateaus, and you must not stay there, you must go beyond them`,
      `our greatest weakness lies in giving up. the most certain way to succeed is always to try just one more time.`,
      `you are never too old to set another goal or to dream a new dream.`,
      `dude, sucking' at something is the first step at being sorta good at something.`,
      `i know where i'm going and i know the truth, and i don't have to be what you want me to be. i'm free to be what i want.`,
      `our greatest weakness lies in giving up. the most certain way to succeed is always to try just one more time.`,
      `There is no path to happiness, happiness is the path`,
      `The sun moon and truth can't be long hidden`,
      `Pain is certain, suffering is optional`,
      `Be your own light`,
      `A man is not punished for his anger, he is punished by his anger`,
      `Holding on to anger is like drinking the poison and expecting other person to die.`,
      `Be the change you want to see in the world`,
      `Wake up, rise and don't stop till your goals are achieved`,
      `whatever you want in life reach out and grab it`
    ];
  }
}
