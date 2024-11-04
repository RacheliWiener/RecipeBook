import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { RecipesesComponent } from './components/recipeses/recipeses.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipesServiceService } from './services/recipes-service.service';
import { AddingRecipeComponent } from './components/adding-recipe/adding-recipe.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { FavoriteComponent } from './favorite/favorite.component';


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    RecipesesComponent,
    RecipeComponent,
    AddingRecipeComponent,
    StatisticsComponent,
    RecipeComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RecipesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
