import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {environment} from './environment';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';
import {MdIconRegistry} from '@angular2-material/icon';
import {Renderer} from '@angular/core';
import {MdRadioDispatcher} from '@angular2-material/radio/radio_dispatcher';
import 'rxjs/Rx';

import {enableProdMode} from '@angular/core';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  MdIconRegistry,
  Renderer,
  MdRadioDispatcher
]);
