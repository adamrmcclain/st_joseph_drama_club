import {CastAndCrew} from '/interfaces/castandcrew.ts';
import {Injectable} from 'angular2/core';
import {Observable}     from 'rxjs/Observable';
import {Http, Response} from 'angular2/http';

@Injectable()
export class CastService {

constructor (private http: Http) {}

private castUrl = "/api/v1/castandcrew"

getCastMembers() : Observable<CastAndCrew[]> {
    return this.http.get(this.castUrl)
              .map(this.extractData)
              .catch(this.handleError);
  }

getMember(id: number) : Observable<CastAndCrew> {
  let cast = this.http.get(this.castUrl)
            .map(this.extractData)
            .catch(this.handleError);
  return cast.filter(member => member.id === id)[0];
}

  getOfficers() : Observable<CastAndCrew[]> {
    let cast = this.http.get(this.castUrl)
              .map(this.extractData)
              .catch(this.handleError);
    let members = null;
    let errorMessage = "";
    cast.subscribe(members => this.members = members,
      error =>  this.errorMessage = <any>error);
    return members.filter(member => member.isOfficer === true);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >=300) {
      throw new Error('Bad response status: ' + res.stauts);
    }
    let body = res.json();
    console.log(body);
    return body || {};
  }

  private handleError (error: any) {
    let errMsg = error.message || 'Server error';
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

}
