import { NgComponentOutlet } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup , Validators, NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Recipe } from 'src/app/Models/recipe';
import { RecipesServiceService } from 'src/app/services/recipes-service.service';
import { StaticService } from 'src/app/services/static.service';

@Component({
  selector: 'app-adding-recipe',
  templateUrl: './adding-recipe.component.html',
  styleUrls: ['./adding-recipe.component.scss']
})
export class AddingRecipeComponent {
  @ViewChild('myForm') myForm:NgForm
  recipes$: Observable<Recipe[]>;
  private sub = new Subscription();
  r: Recipe;
  recipeFromGroup: FormGroup;
  name: string;
  isLiked: boolean;
  constructor(private RecipeService: RecipesServiceService, private FormBuilder: FormBuilder, private my: ActivatedRoute, private ststicFromSrvs:StaticService) { }

  ngOnInit(): void {
    this.recipeFromGroup = this.FormBuilder.group({
      name: this.FormBuilder.control(''),
      category: this.FormBuilder.control(''),
      products: this.FormBuilder.array([]),
      instructions: this.FormBuilder.array([]),
      levelOfDifficulty: this.FormBuilder.control(''),
      page: this.FormBuilder.control(''),
      love: this.FormBuilder.control(''),
      numOfDishes: this.FormBuilder.control('')
    }
    );
    this.my.paramMap.subscribe(r => this.name = r.get('name'));
  }
  get products() {
    return this.recipeFromGroup.get('products') as FormArray;
  }

  get instructions() {
    return this.recipeFromGroup.get('instructions') as FormArray;
  }

  add() {
    this.r = {
      name: this.recipeFromGroup.get('name').value,
      category: this.recipeFromGroup.get('category').value,
      products: this.recipeFromGroup.get('products').value,
      instructions: this.recipeFromGroup.get('instructions').value,
      levelOfDifficulty: this.recipeFromGroup.get('levelOfDifficulty').value,
      page: this.recipeFromGroup.get('page').value,
      love: this.isLiked,
      numOfDishes: this.recipeFromGroup.get('numOfDishes').value,
    };
   if(this.isLiked)
     this.ststicFromSrvs.addLove()
   else 
     this.ststicFromSrvs.lessLove()
    
  this.RecipeService.AddRecipe(this.r);
    confirm("The recipe was successfully added.")
  }
  changeFavorite(v: boolean){
    this.isLiked = v;
    
  }

}
