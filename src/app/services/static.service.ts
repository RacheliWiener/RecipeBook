import { BehaviorSubject, Observable } from 'rxjs';
import { RecipesServiceService } from './recipes-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticService {

  firstLoves: number;
  
  ViewsSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  loves: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  get ViewsCounter$(): Observable<number> {
    return this.ViewsSubject.asObservable();
  }
  get loves$(): Observable<number> {
    return this.loves.asObservable();
  }
  AddToCounter(): void {
    const old = this.ViewsSubject.getValue();
    this.ViewsSubject.next(old + 1);
  }
  constructor(private recipe:RecipesServiceService) { };
  
  firstLovedFunc() {
   this.firstLoves=this.recipe.firstLove();
   this.loves.next(this.firstLoves) ;
  }
  addLove() {
    this.loves.next(this.loves.getValue() + 1);
  }
  lessLove() {
    this.loves.next(this.loves.getValue() - 1);
  }}