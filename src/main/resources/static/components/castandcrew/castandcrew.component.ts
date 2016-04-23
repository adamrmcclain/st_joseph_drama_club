import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import {CastAndCrew} from '/interfaces/castandcrew.ts';
import {CastService} from '/services/castandcrew/castandcrew.service.ts';
import { CastDetailComponent } from '/component/castdetails/castdetails.component.ts';

@Component({
  templateUrl:'./components/castandcrew/castandcrew.html',
  styleUrls: ['static/css/thumbnail-gallery.css'],
  providers: [CastService]
})
export class CastAndCrewComponent implements OnInit {

members = null;

constructor( private _router: Router, private _castService: CastService) { }

getMembers() {
    this._castService.getCastMembers().then(members => this.members = members);
  }

  ngOnInit() {
    this.getMembers();
  }

  gotoDetail(member: Member) {
    let link = ['CastDetails', { id: member.id }];
    console.log("Navigating to: " + link);
    this._router.navigate(link);
  }
}
