import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe';
import { StaticService } from 'src/app/services/static.service';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
  @Output() changeLikeEvent = new EventEmitter<boolean>();
  isLiked: boolean;
  @Input() recipe1: Recipe;

  constructor(private ststicFromSrv: StaticService){}

  ngOnInit(){
    if(this.recipe1.love){
      this.isLiked=true;
      this.recipe1.love=true;
      this.ststicFromSrv.addLove();}
    else{
      this.isLiked=false;
      this.recipe1.love=false;
      this.ststicFromSrv.lessLove();}
   }

  toggleLike(e:Event) {
    
    this.isLiked = !this.isLiked;
    this.changeLikeEvent.emit(this.isLiked);
    console.log(this.isLiked);    
  }
 
}
