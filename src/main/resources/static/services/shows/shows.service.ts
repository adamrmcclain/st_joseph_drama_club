import {Show} from '/interfaces/shows.ts';
import {SHOWS} from './mock-shows.ts';
import {Injectable} from 'angular2/core';
@Injectable()
export class ShowService {
getAllShows() {
    return Promise.resolve(SHOWS);
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

  // See the "Take it slow" appendix
  getShowsSlowly() {
    return new Promise<Show[]>(resolve =>
      setTimeout(()=>resolve(SHOWS), 2000) // 2 seconds
    );
  }
}
