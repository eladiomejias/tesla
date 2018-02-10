import { Routes, RouterModule } from "@angular/router";
import { HistoryComponent } from "./history/history.component";
import { IndexComponent } from "./index/index.component";
import { NewsComponent } from "./news/news.component";
import { ModelsComponent } from "./models/models.component";

import { AppComponent } from "./app.component";

const APP_ROUTES: Routes = [
  { path: 'history', component: HistoryComponent },
  { path: 'news', component: NewsComponent },
  { path: 'models', component: ModelsComponent },
  { path: '', component: IndexComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
