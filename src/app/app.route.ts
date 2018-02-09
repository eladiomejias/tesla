import { Routes, RouterModule } from "@angular/router";
import { HistoryComponent } from "./history/history.component";
import { IndexComponent } from "./index/index.component";
import { AppComponent } from "./app.component";

const APP_ROUTES: Routes = [
  { path: 'history', component: HistoryComponent },
  { path: '', component: IndexComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
