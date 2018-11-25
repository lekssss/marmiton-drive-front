import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    ProfileComponent,
    CartComponent,
    SearchComponent,
    RecipeDetailsComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
