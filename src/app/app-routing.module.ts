import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesesComponent } from './components/recipeses/recipeses.component';
import { AddingRecipeComponent } from './components/adding-recipe/adding-recipe.component';
import { RecipeComponent } from './components/recipe/recipe.component';


const routes: Routes = [
  {
  path: '',
  component:RecipesesComponent,
  },
  {
    path:'adding-recipe',
    component:AddingRecipeComponent,
  },
  {
    path:'favorite-recipes',
    component:RecipesesComponent,
  },
  {
    path:'recipeses',
    component:RecipesesComponent,
  },
  {
    path:'specificRecipe/:name',
    component:RecipesesComponent,

  },
  {
    path:'recipe/:name', 
    component : RecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
