import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {CastAndCrew} from '/interfaces/castandcrew.ts';
import {CastService} from '/services/castandcrew/castandcrew.service.ts';


@Component({
  templateUrl: `./components/castdetails/castdetails.html`,
  inputs: ['member'],
    providers: [CastService]
})
export class CastDetailComponent  implements OnInit {
  errorMessage = "";
  member = null;

  constructor( private _routeParams: RouteParams
    , private _castService: CastService
  ) { }

  getMember(id: number) {
    this._castService.getCastMembers()
      .subscribe(members => this.member = members.filter(member => member.id === id)[0],
      error =>  this.errorMessage = <any>error);
    }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this.getMember(id);
  }
}
