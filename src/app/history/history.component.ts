import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

import { LangService } from '../shared/lang.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{

  constructor(private translate: TranslateService, private appService: LangService) {

  // Gettings an array of lang
  translate.addLangs(appService.getArray());

  // Default Language when is not locally
  translate.setDefaultLang("es");

  // Using language
  translate.use("es");

  // Default
  let browserLang = translate.getBrowserLang();
  translate.use(browserLang.match(/es|en/) ? browserLang : 'es');

 }

  ngOnInit() {
  }

}
