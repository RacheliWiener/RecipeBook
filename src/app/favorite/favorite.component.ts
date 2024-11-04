import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../Models/recipe';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
  @Output() changeLikeEvent = new EventEmitter<boolean>();
  isLiked: boolean;
  @Input() recipe1: Recipe;

  constructor(){}

  ngOnInit(){
    if(this.recipe1.love){
      this.isLiked=true;
      this.recipe1.love=true;}
    else{
      this.isLiked=false;
      this.recipe1.love=false;}
   }

  toggleLike(e:Event) {
    
    this.isLiked = !this.isLiked;
    this.changeLikeEvent.emit(this.isLiked);
    console.log(this.isLiked);    
  }
 
}
