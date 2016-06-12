import {Show} from '/interfaces/shows.ts';
import {Injectable} from 'angular2/core';
import {Observable}     from 'rxjs/Observable';
import {Http, Response} from 'angular2/http';
@Injectable()
export class ShowService {

  constructor (private http: Http) {}

  private showUrl = "/api/v1/shows"

getAllShows() : Observable<Show[]> {
  return this.http.get(this.showUrl)
            .map(this.extractData)
            .catch(this.handleError);
  }

  getPastShows() {
    return Promise.resolve(SHOWS).then(
    show => show.filter(show => show.isCurrent === false) );
  }

getShow(id: number) {
  return Promise.resolve(SHOWS).then(
  show => show.filter(show => show.id === id)[0]
);
}

getCurrentShow() {
  return Promise.resolve(SHOWS).then(
  show => show.filter(show => show.isCurrent === true)[0]
}

isCurrentShowActive() {
  return true;
}

private extractData(res: Response) {
  console.log("Extracting data:");
  if (res.status < 200 || res.status >=300) {
    throw new Error('Bad response status: ' + res.stauts);
  }
  let body = res.json();
  console.log(body);
  return body || {};
}

private handleError (error: any) {
  console.log("Error Message")
  let errMsg = error.message || 'Server error';
  console.log(errMsg);
  return Observable.throw(errMsg);
}
}
