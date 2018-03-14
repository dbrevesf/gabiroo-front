import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';
import { Tweet } from '../tweet';
import { TweetSentiment } from '../tweet-sentiment';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-tweet-box',
  templateUrl: './tweet-box.component.html',
  styleUrls: ['./tweet-box.component.css']
})
export class TweetBoxComponent implements OnInit {

  constructor(private tweetService: TweetService) { }

  tweetlist: Tweet[];
  tweetSentiment: TweetSentiment;
  tweetCounter = 0;
  currentTweet: string;
  currentTweetOrigin: string;
  currentTweetId;

  ngOnInit() {

  	this.getTweets();
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    console.log(event.key);
    if(event.key === 'g') {
      this.postSentiment(1);
    } else if (event.key === 'b') {
      this.postSentiment(0);
    } else if (event.key === 'i') {
      this.postSentiment(2);
    }
  }

  getTweets(): void {

    this.tweetService.getTweet().subscribe(data => this.assignTweetsToList(data));
  }

  assignTweetsToList(returnedData: Tweet[]): void {

    this.tweetlist = returnedData;
    this.getTweet();
  }

  tweetSentimentReturn(returnedData: string): void {

    if(returnedData) {
      console.log("Tweet was stored");
    } else {
      console.log("Tweet was not stored");
    }
    this.getTweet();
  }

  getTweet(): void {

    this.currentTweet = "There's no tweet to be shown";
    this.currentTweetOrigin = "Void";
    this.currentTweetId = 0;
    if(this.tweetlist) {
      if(this.tweetCounter < this.tweetlist.length) {
        this.currentTweet = this.tweetlist[this.tweetCounter].text;  
        this.currentTweetOrigin = this.tweetlist[this.tweetCounter].origin;
        this.currentTweetId = this.tweetlist[this.tweetCounter].id;
        this.tweetCounter++;
      } 
    } 
  }

  postSentiment(sentiment: number): void {

    let tweetSentiment = new TweetSentiment();
    tweetSentiment.id = this.currentTweetId;
    tweetSentiment.origin = this.currentTweetOrigin;
    tweetSentiment.text = this.currentTweet;
    tweetSentiment.sentiment = sentiment;
    this.tweetService.postSentiment(tweetSentiment).subscribe(data => this.tweetSentimentReturn(data));
  }
}
