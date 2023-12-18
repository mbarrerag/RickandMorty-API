import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsModule } from './character-details/character-details.module';
import { CharacterListModule } from './character-list/character-list.module';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    CharacterDetailsModule,
    CharacterListModule
  ],
  exports: [
    CharacterDetailsModule,
    CharacterListModule
  ]
})
export class CharactersModule { }
