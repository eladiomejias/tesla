import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Routing
import { Router } from '@angular/router';
import { Routing } from "./app.route";
import { HttpModule } from '@angular/http';
import { UserService } from './news/user.service';

// Language
import { LangService } from './shared/lang.service';


// Angular Material Imports
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';

// Components for Modules
import { FooterComponent } from './footer/footer.component';
import { HistoryComponent } from './history/history.component';
import { IndexComponent } from './index/index.component';
import { ModelsComponent } from './models/models.component';
import { NewsComponent } from './news/news.component';

// Translate
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

// Function for Translation
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, "i18n/", ".json");
}

// NgModule
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HistoryComponent,
    IndexComponent,
    ModelsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    BrowserAnimationsModule,
    Routing,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
                                loader: {
                                  provide: TranslateLoader,
                                  useFactory: HttpLoaderFactory,
                                  deps: [HttpClient]
                                }
                            })
  ],
  providers: [LangService],
  bootstrap: [AppComponent]
})
export class AppModule { }
