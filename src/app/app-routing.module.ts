import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatePassiveComponent } from './passives/create-passive/create-passive.component';
import { ListPassivesComponent } from './passives/list-passives/list-passives.component';

const routes: Routes = [
  {
    path: 'passives',
    children: [
      { path: '', component: ListPassivesComponent },
      { path: 'create', component: CreatePassiveComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
