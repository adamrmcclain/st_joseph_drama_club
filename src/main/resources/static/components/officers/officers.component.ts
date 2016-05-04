import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import {CastAndCrew} from '/interfaces/castandcrew.ts';
import {CastService} from '/services/castandcrew/castandcrew.service.ts';
import { CastDetailComponent } from '/component/castdetails/castdetails.component.ts';

@Component({
  templateUrl:'./components/officers/officers.html',
  styleUrls: ['static/css/thumbnail-gallery.css'],
  providers: [CastService]
})
export class OfficerComponent implements OnInit {

members = null;
errorMessage = "";

constructor( private _router: Router, private _castService: CastService) { }

getOfficers() {
    this._castService.getCastMembers()
      .subscribe(members => this.members = members.filter(member => member.isOfficer === true),
      error =>  this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getOfficers();
  }

  gotoDetail(member: Member) {
    let link = ['CastDetails', { id: member.id }];
    this._router.navigate(link);
  }
}
