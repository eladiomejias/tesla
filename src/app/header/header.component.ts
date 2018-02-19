import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from '../shared/lang.service';

@Component({
  selector: 'app-header',
  template: `
  <!-- Uses a header that scrolls with the text, rather than staying locked at the top -->
    <div class="mdl-layout mdl-js-layout">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <span class="mdl-layout-title">TESLA MOTORS INC.</span>
          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>
          <!-- Navigation -->
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" [ngClass]="{'active': actived == 'active-1'}" [routerLink]="['']" href="">{{ 'NAVBAR.ONE' | translate | uppercase }}</a>
            <a class="mdl-navigation__link" href="" [routerLink]="['models']" [class.incrementFont]="increment">{{ 'NAVBAR.TWO' | translate | uppercase }}</a>
            <a class="mdl-navigation__link" href="" [routerLink]="['news']">{{ 'NAVBAR.THREE' | translate  | uppercase}}</a>
            <a class="mdl-navigation__link" href="" [routerLink]="['history']">{{ 'NAVBAR.FOUR' | translate | uppercase }}</a>
            <select #langSelect (change)="translate.use(langSelect.value)">
              <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">{{ lang | uppercase }}</option>
            </select>
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">TESLA MOTORS INC.</span>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" [ngClass]="{'active': actived == 'active-1'}" [routerLink]="['']" href="">{{ 'NAVBAR.ONE' | translate | uppercase }}</a>
          <a class="mdl-navigation__link" href="" [routerLink]="['models']">{{ 'NAVBAR.TWO' | translate | uppercase }}</a>
          <a class="mdl-navigation__link" href="" [routerLink]="['news']">{{ 'NAVBAR.THREE' | translate | uppercase }}</a>
          <a class="mdl-navigation__link" href="" [routerLink]="['history']">{{ 'NAVBAR.FOUR' | translate | uppercase }}</a>
        </nav>
      </div>
      <main class="mdl-layout__content">
        <ng-content></ng-content>
      </main>
    </div>

  `,
  styles: ['header { background: rgba(0,0,0,.97); } .tesla_title{ font-weight: 500; font-size: 1.2em; letter-spacing: 11px; } .mdl-layout__drawer-button { color: white !important; } .incrementFont { font-size: 3em !important; }']
})
export class HeaderComponent implements OnInit {

    increment;

    constructor(private translate: TranslateService, private appService: LangService) {
      // Gettings an array of lang
      translate.addLangs(appService.getArray());

      // Default Language when is not locally
      translate.setDefaultLang("es");

      // Using language
      translate.use(appService.getValue());
  }

  ngOnInit() {
  }

  changeFontSize(){
  }


}
