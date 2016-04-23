import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import {Show} from '/interfaces/shows.ts';
import {ShowService} from '/services/shows/shows.service.ts';
import { ShowDetailComponent } from '/component/showdetails/showdetails.component.ts';
@Component({
  templateUrl:'./components/pastshows/pastshows.html',
  styleUrls: ['static/css/thumbnail-gallery.css'],
    providers: [ShowService]
})
export class PastShowsComponent implements OnInit {

shows = null;

constructor( private _router: Router, private _showService: ShowService) { }

getPastShows() {
    this._showService.getPastShows().then(shows => this.shows = shows);
  }

  ngOnInit() {
    this.getPastShows();
  }

  gotoDetail(show: Show) {
    let link = ['ShowDetails', { id: show.id }];
    console.log("Navigating to: " + link);
    this._router.navigate(link);
  }
}
