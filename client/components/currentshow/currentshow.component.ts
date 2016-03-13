import {Component, OnInit} from 'angular2/core';
import {Show} from '/interfaces/show.ts';
import {ShowService} from '/services/shows/shows.service.ts';
@Component({
  templateUrl:'./components/currentshow/currentshow.html',
  inputs: ['show'],
    styleUrls: ['static/css/details.css'],
    providers: [ShowService]
})
export class CurrentShowComponent implements OnInit {
  show: Show;
  ticketsOnSale = true;
  constructor( private _showService: ShowService
  ) { }


  ngOnInit() {
    this._showService.getCurrentShow()
      .then(show => this.show = show);

    this._showService.isCurrentShowActive();
  } }
