import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePassiveComponent } from './create-passive/create-passive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListPassivesComponent } from './list-passives/list-passives.component';



@NgModule({
  declarations: [
    CreatePassiveComponent,
    ListPassivesComponent
  ],
  imports: [

    CommonModule,
    ReactiveFormsModule,
  ]
})
export class PassivesModule { }
