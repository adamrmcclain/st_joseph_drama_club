import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CastAndCrewComponent}   from 'components/castandcrew/castandcrew.component';
import {HomeComponent}     from 'components/home/home.component';
@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', redirectTo: ['/home'] },
  {path:'/cast_crew', name: 'CastAndCrew', component: CastAndCrewComponent},
  {path:'/home',        name: 'Home',       component: HomeComponent, useDefault: true}
])
export class AppComponent { }