import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormSearchComponent } from './shared/components/form-search/form-search.component';
import { PanelComponent } from './shared/components/panel/panel.component';
import { PicturesComponent } from './pages/pictures/pictures.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    FormSearchComponent,
    PanelComponent,
    PicturesComponent,
    PageNotFoundComponent,
    SearchBarComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
