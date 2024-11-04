import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Recipe } from 'src/app/Models/recipe';
import { RecipesServiceService } from 'src/app/services/recipes-service.service';
import { StaticService } from 'src/app/services/static.service';
@Component({
  
  selector: 'app-recipeses',
  templateUrl: './recipeses.component.html',
  styleUrls: ['./recipeses.component.scss']
})

export class RecipesesComponent {
  recipes$: Observable<Recipe[]>;
  private sub = new Subscription();
  // @Input('fa')
  selectedRecipe: Recipe;
  name:string;
  counter$:Observable<number>;
  private sub2 = new Subscription();
  //isfavoritPage: boolean = false;
 // favorit: boolean = true;
  level: number = 0;
  isFav: string="1";

  constructor(private recipeFromSrv: RecipesServiceService, private rout: ActivatedRoute,private ststicFromSrv: StaticService) { };
  ngOnInit() {
    this.recipes$ = this.recipeFromSrv.Recipes$;
    this.sub = this.recipeFromSrv.Recipes$.subscribe();
    this.rout.paramMap.subscribe(params => {
      this.isFav = params.get("name");
      if (this.isFav == "0") { this.recipes$ = this.recipeFromSrv.Recipes$; }
      if (this.isFav == "1") { this.recipes$ = this.recipeFromSrv.getLoveRepice$; }
    })
    this.level = 0;
  }
  checkDifficulty(x: Recipe): number {
    this.level = this.recipeFromSrv.checkDifficulty(x);
    return this.level;
  }
  changeLove(r: Recipe) {
    if (r.love === false){
      r.love = true;
     this.ststicFromSrv.addLove()
    }
    else{
      r.love = false;
      this.ststicFromSrv.lessLove()
  }}
  delete(r: Recipe) {
    if (confirm("Are you sure? "))
      this.recipeFromSrv.DeleteRepice(r);
    else
      return
  }
  ChangeLove(r: Recipe):Recipe {
    var newRecipc = this.recipeFromSrv.ChangeFavorite(r);
    this.ngOnInit();
    return newRecipc;
}
  statistics() {
    this.ststicFromSrv.AddToCounter();
}
  
  imageUrl: string = 'assets/bbbb.jpg';

}


 





