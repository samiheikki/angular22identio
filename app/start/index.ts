import {Component, OnInit} from '@angular/core';
import {Route, Routes, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  templateUrl: 'app/start/template.html',
  styleUrls: ['app/start/style.css']
})
export class StartComponent implements OnInit {
  translation = {};
  constructor(

  ) {
  }
  ngOnInit() {
    console.log("a");
  }
  startTest() {
    //this._appService.setCurrentTask(1);
    //this._router.navigate(['FindWords', {id: 1} ]);
  }
}
