
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PanelComponent } from '@app/shared/components/panel/panel.component';
import { CharactersModule } from '../characters/characters.module';
import { CharacterDetailsComponent } from '../characters/character-details/character-details.component';
import { PanelModule } from '@app/shared/components/panel/panel.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CharactersModule,
    PanelModule
  
  
  ],
})
export class HomeModule { }
