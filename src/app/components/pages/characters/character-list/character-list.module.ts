import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from './character-list.component';
import { CharactersModule } from '../characters.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CharacterListRoutingModule,
 


  ]
})
export class CharacterListModule { }
