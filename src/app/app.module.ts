import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormSearchComponent } from './shared/components/form-search/form-search.component';
import { PanelComponent } from './shared/components/panel/panel.component';
import { PicturesComponent } from './pages/pictures/pictures.component';




@NgModule({
  declarations: [
    AppComponent,
    FormSearchComponent,
    PanelComponent,
    PicturesComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
