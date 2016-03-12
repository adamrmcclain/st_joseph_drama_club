import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CastAndCrewComponent}   from '../components/castandcrew/castandcrew.component.ts';
import {HomeComponent}     from '../components/home/home.component.ts';
import {PastShowsComponent}   from '../components/pastshows/pastshows.component.ts';
import {CurrentShowComponent}     from '../components/currentshow/currentshow.component.ts';
import {CastDetailComponent}  from '../components/castdetails/castdetails.component.ts';
import {ShowDetailComponent} from '../components/showdetails/showdetails.component.ts';
@Component(
    {
        selector: 'my-app',
        templateUrl: `./app/route.html`,
        directives: [ROUTER_DIRECTIVES]
    }
)
@RouteConfig([
  { path:'/home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true},
  { path:'/castcrew',
    name: 'CastAndCrew',
    component: CastAndCrewComponent},
  { path: '/castdetail/:id',
    name: 'CastDetails',
    component: CastDetailComponent
  }
  { path:'/pastshows',
    name: 'PastShows',
    component: PastShowsComponent},
  { path:'/currentshow',
    name: 'CurrentShow',
    component: CurrentShowComponent},
    { path : '/showdetail/:id',
      name : 'ShowDetails',
      component: ShowDetailComponent
    }
  { path: '/',
    redirectTo: ['Home'] }
])
export class AppComponent { }
