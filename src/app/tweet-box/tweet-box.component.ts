import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-box',
  templateUrl: './tweet-box.component.html',
  styleUrls: ['./tweet-box.component.css']
})
export class TweetBoxComponent implements OnInit {

  constructor() { }

  tweetlist: string[] = [];
  tweetCounter = 0;
  currentTweet: string;

  ngOnInit() {

  	this.tweetlist[0] = "BREAKING: The world's problems will not be solved by arguing with strangers on Twitter. We'll update you when we have more on this story. UPDATE: The world's problems will still not be solved by arguing with strangers on Twitter, even with 280 characters to play with.";
  	this.tweetlist[1] = "Ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding ding...room for more bell dings with #280characters";
  	this.tweetlist[2] = "Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regnant of the Seven Kingdoms, Breaker of Chains and Mother of Dragons.";
  	this.getTweet();
  }

  getTweet(): void {
	
  	if(this.tweetCounter < this.tweetlist.length) {
  		this.currentTweet = this.tweetlist[this.tweetCounter];
	} else {
		this.currentTweet = "There's any tweet to show";
	}
  	this.tweetCounter++;
  }



}
