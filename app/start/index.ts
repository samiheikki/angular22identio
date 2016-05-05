import {Component, OnInit} from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';

@Component({
  templateUrl: 'app/start/template.html',
  styleUrls: ['app/start/style.css']
})
export class StartComponent implements OnInit {
  translation = {};
  constructor(
    private _router: Router,
    private _routeParams: RouteParams) {
  }
  ngOnInit() {
    console.log("a");
  }
  startTest() {
    //this._appService.setCurrentTask(1);
    this._router.navigate(['FindWords', {id: 1} ]);
  }
}
