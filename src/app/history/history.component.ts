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

  constructor() {
 }

  ngOnInit() {
  }

}
