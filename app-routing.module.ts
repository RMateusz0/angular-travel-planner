import { PlacesToVisitComponent } from './places-to-visit/places-to-visit.component';
import { ToTakeListComponent } from './to-take-list/to-take-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "currencies", component: CurrenciesComponent},
  {path: "to-take-list", component: ToTakeListComponent},
  {path: "places-to-visit", component: PlacesToVisitComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
