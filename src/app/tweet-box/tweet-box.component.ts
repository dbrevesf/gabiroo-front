import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-tweet-box',
  templateUrl: './tweet-box.component.html',
  styleUrls: ['./tweet-box.component.css']
})
export class TweetBoxComponent implements OnInit {

  constructor(private tweetService: TweetService) { }

  tweetlist: Tweet[];
  tweetCounter = 0;
  currentTweet: string;
  currentTweetOrigin: string;

  ngOnInit() {

  	this.getTweets();
  }

  getTweets(): void {

    this.tweetService.getTweet().subscribe(data => this.assignTweetsToList(data));
  }

  assignTweetsToList(returnedData: Tweet[]): void {

    this.tweetlist = returnedData;
    this.getTweet();
  }

  getTweet(): void {

    if(this.tweetlist) {
      if(this.tweetCounter < this.tweetlist.length) {
        this.currentTweet = this.tweetlist[this.tweetCounter].text;  
        this.currentTweetOrigin = this.tweetlist[this.tweetCounter].origin;
        this.tweetCounter++;
      } else {
        this.currentTweet = "There's no tweet to be shown";
        this.currentTweetOrigin = "Void";
      }
    } else {
      this.currentTweet = "There's no tweet to be shown";
      this.currentTweetOrigin = "Void";
    }    
  	
    
  }

}
