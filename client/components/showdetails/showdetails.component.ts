import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Show} from '/interfaces/show.ts';
import {ShowService} from '/services/shows/shows.service.ts';


@Component({
  templateUrl: `./components/showdetails/showdetails.html`,
  inputs: ['show'],
    styleUrls: ['static/css/details.css'],
    providers: [ShowService]
})
export class ShowDetailComponent  implements OnInit {
  show: Show;
  constructor( private _routeParams: RouteParams
    , private _showService: ShowService
  ) { }


  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._showService.getShow(id)
      .then(show => this.show = show);
  }
}
