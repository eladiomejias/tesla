import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <!-- Uses a header that scrolls with the text, rather than staying
    locked at the top -->
    <div class="mdl-layout mdl-js-layout">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <span class="mdl-layout-title">TESLA MOTORS</span>
          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>
          <!-- Navigation -->
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" [ngClass]="{'active': actived == 'active-1'}" [routerLink]="['']" href="">INICIO</a>
            <a class="mdl-navigation__link" href="" [routerLink]="['models']">MODELOS</a>
            <a class="mdl-navigation__link" href="" [routerLink]="['news']" >NOTICIAS</a>
            <a class="mdl-navigation__link" href="" [routerLink]="['history']">HISTORIA</a>
            <mat-form-field>
              <mat-select [(value)]="option1">
                <mat-option value="option1">ES</mat-option>
                <mat-option value="option2">EN</mat-option>
              </mat-select>
            </mat-form-field>
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">TESLA MOTORS</span>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" [ngClass]="{'active': actived == 'active-1'}" [routerLink]="['']" href="">INICIO</a>
          <a class="mdl-navigation__link" href="" [routerLink]="['models']">MODELOS</a>
          <a class="mdl-navigation__link" href="" [routerLink]="['news']">NOTICIAS</a>
          <a class="mdl-navigation__link" href="" [routerLink]="['history']">HISTORIA</a>
        </nav>
      </div>
      <main class="mdl-layout__content">
        <ng-content></ng-content>
      </main>
    </div>

  `,
  styles: ['header { background: rgba(0,0,0,.97); } .tesla_title{ font-weight: 500; font-size: 1.2em; letter-spacing: 11px; } .mdl-layout__drawer-button { color: white !important; }']
})
export class HeaderComponent implements OnInit {

  option1 = 1;

  constructor() { }

  ngOnInit() {
  }

}

console.log(window.location.href);
