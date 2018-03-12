import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { Tweet } from './tweet';

@Injectable()
export class TweetService {

	private tweetUrl = 'http://127.0.0.1:5000/tweets';

	constructor(private http: HttpClient,
				private messageService: MessageService) { }

	getTweet(): Observable<Tweet[]> {

		const url = this.tweetUrl;
		return this.http.get<Tweet[]>(url).pipe(
			tap(tweets => this.log("TESTE")));
	}

	private log(message: string) {
		this.messageService.add('TweetService: ' + message);
	}


	private handleError<T> (operation = 'operation', result?: T) {
  		
  		return (error: any): Observable<T> => {

			// TODO: send the error to remote logging infrastructure
    		console.error(error); // log to console instead

		    // TODO: better job of transforming error for user consumption
		    this.log(`${operation} failed: ${error.message}`);

		    // Let the app keep running by returning an empty result.
		    return of(result as T);
		  };
	}

}
