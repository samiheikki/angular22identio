import {Component, OnInit} from '@angular/core';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdButton} from '@angular2-material/button';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router-deprecated';
import { StartComponent } from './start/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/template.html',
    directives: [MdCheckbox, ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MdButton],
    providers: [ROUTER_PROVIDERS],
})
@RouteConfig([
  {
    path: '/start',
    name: 'Start',
    component: StartComponent,
    useAsDefault: true
  }/*,
  {
    path: '/findwords/:id',
    name: 'FindWords',
    component: FindWordsComponent
  },
  {
    path: '/formwords/:id',
    name: 'FormWords',
    component: FormWordsComponent
  },
  {
    path: '/markhyphen/:id',
    name: 'MarkHyphen',
    component: MarkHyphenComponent
  },
  {
    path: '/wordchainseparate/:id',
    name: 'WordChainSeparate',
    component: WordChainSeparateComponent
  },
  {
    path: '/result',
    name: 'Result',
    component: ResultComponent
  },*/
])
export class AppComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }
}
