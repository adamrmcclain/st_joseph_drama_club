import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CastAndCrewComponent}   from '../components/castandcrew/castandcrew.component.ts';
import {HomeComponent}     from '../components/home/home.component.ts';

@Component(
    {
        selector: 'my-app',
        template: `<router-outlet></router-outlet>`,
        directives: [ROUTER_DIRECTIVES]
    }
)
@RouteConfig([
  { path:'/home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true},
  { path:'/cast_crew',
    name: 'CastAndCrew',
    component: CastAndCrewComponent},
  { path: '/',
    redirectTo: ['Home'] }
])
export class AppComponent { }