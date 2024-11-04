import { Injectable } from '@angular/core';
import { Recipe } from '../Models/recipe';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesServiceService {
  constructor() { }
  // ViewCounter$:number=0;
  // FavoriteCounter$:number=0;
  f:number;
  get Recipes$(): Observable<Recipe[]>{
    return this.recipeList.asObservable();
  }
  // num:number;
  get getLoveRepice$():Observable<Recipe[]>{
    // this.num++;
    return of(this.recipeList.getValue().filter(r=>r.love));
   }

    //#region  רשימת מתכונים
  private recipeList:BehaviorSubject<Recipe[]>=new BehaviorSubject<Recipe[]>(
  [{name:"ChoclateChips",
  category : "Cookies",
  products:["2 eggs","2 cups sugar","1 cup oil","2 cups flour","teaspoon sult","teaspoon vanila extract","cup choclateChips"],
  instructions:["Put everything in a bowl, mix them and make balls out of them. Put in the oven on 180 degree for 10 minutes."],
  levelOfDifficulty:1,
  page:3,
  love:true,
  numOfDishes:3},
  {name:"PeanutButterCake,",
  category :"Cake",
  products:["3 eggs","2 cups brown sugar","1 cup oil","1 cup PeanutButter","2.5 cups flour","teaspoon sult","2 teaspoon baking powder","cup choclateChips"],
  instructions:["Put everything in a bowl, mix them and put in a regular pan. Bake for 25 minutes at 180 degrees."],
  levelOfDifficulty:2,
  page:12,
  love:true,
  numOfDishes:2},
  {name:"Cheesecake,",
  category :"Cake",
  products:['750gr cheese','2 cups sugar','1 white choclate'],
  instructions:['Put everything in a bowl, mix them and put in a regular pan. Bake for 25 minutes at 180 degrees.'],
  levelOfDifficulty:3,
  page:12,
  love:false,
  numOfDishes:30},
  ]);
  //#endregion
  AddRecipe(newRecipc:Recipe)
  {
    const recipeOld=this.recipeList.getValue();
    this.recipeList.next([...recipeOld,newRecipc])
  }
  DeleteRepice(deleteRecipce:Recipe)
  {
   this.recipeList.next(this.recipeList.getValue().filter(r=>(r!=deleteRecipce)))
  } 

  checkDifficulty( x:Recipe):number{
  if (x.levelOfDifficulty==1)
     return 1;
  if (x.levelOfDifficulty==2)
     return 2;
  return 3;
 }
  getDetails(name:string):Recipe{
    return this.recipeList.getValue().find(r => r.name==name);
 }
  ChangeFavorite(r:Recipe):Recipe{
    var newRecipe=this.recipeList.value.find(recipe=>recipe==r);
    newRecipe.love=!newRecipe.love;
    return newRecipe;
 }
 firstLove() {
  this.f = this.recipeList.getValue().filter(r => r.love).length;    
  return this.f;
}


  
  
}