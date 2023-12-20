import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsModule } from './character-details/character-details.module';
import { CharacterListModule } from './character-list/character-list.module';
import { CharacterComponent } from './character.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';




const myComponents = [
  CharacterDetailsComponent, 
  CharacterListComponent, 
  CharacterComponent
];

@NgModule({
  declarations: [...myComponents],
  imports: [CommonModule, RouterModule, InfiniteScrollModule],
  exports: [...myComponents],
})

export class CharactersModule { }
