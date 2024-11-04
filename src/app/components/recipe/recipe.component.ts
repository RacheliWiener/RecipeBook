import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/Models/recipe';
import { RecipesServiceService } from 'src/app/services/recipes-service.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  currUser: Recipe
  constructor(private myActRouter: ActivatedRoute, private recipeserv: RecipesServiceService) { }
  ngOnInit() {
    this.myActRouter.paramMap
      .subscribe(myParams => {
        let rName = myParams.get('name');
        this.currUser = this.recipeserv.getDetails(rName);
      })
  }

}
