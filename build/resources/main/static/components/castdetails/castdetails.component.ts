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
  member: CastAndCrew;
  constructor( private _routeParams: RouteParams
    , private _castService: CastService
  ) { }


  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._castService.getMember(id)
      .then(member => this.member = member);
  }
}
