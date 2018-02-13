import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from '../shared/lang.service';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="mdl-mini-footer">
    <div class="mdl-mini-footer__left-section">
      <div class="mdl-logo">Tesla Motors Inc.</div>
      <ul class="mdl-mini-footer__link-list">
        <li><a href="#">{{ 'FOOTER.ONE' | translate }}</a></li>
        <li><a href="#">{{ 'FOOTER.TWO' | translate }}</a></li>
        <li><a href="#">{{ 'FOOTER.THREE' | translate }}</a></li>
        <li><a href="#">{{ 'FOOTER.FOUR' | translate }}</a></li>
        <li><a href="#">{{ 'FOOTER.FIVE' | translate }}</a></li>
        <li><a href="#">{{ 'FOOTER.SIX' | translate }}</a></li>
      </ul>
    </div>
  </footer>
  `,
  styles: ['']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
