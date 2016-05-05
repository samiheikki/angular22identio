import {Component, OnInit} from '@angular/core';
import {Route, Routes, ROUTER_DIRECTIVES, RouterOutletMap} from '@angular/router';
import { StartComponent } from './start/index';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdIcon} from '@angular2-material/icon';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdButton} from '@angular2-material/button';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdProgressBar} from '@angular2-material/progress-bar';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MdSpinner} from '@angular2-material/progress-circle';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdRadioButton} from '@angular2-material/radio';

@Component({
    selector: 'my-app',
    templateUrl: 'app/template.html',
    styleUrls: ['app/style.css'],
    directives: [
    ROUTER_DIRECTIVES,
    MdButton,
    MdIcon,
    MD_LIST_DIRECTIVES,
    MdToolbar,
    MD_SIDENAV_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdCheckbox,
    MdRadioButton,
    MdSpinner,
    MD_INPUT_DIRECTIVES,
    MdProgressBar
  ]
})
@Routes([
  {path: '/', component: StartComponent}/*,
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

  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];

  progress: number = 0;

  constructor() {

    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }

  ngOnInit() {

  }
}
