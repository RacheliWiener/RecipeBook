import { Component, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Observable, Subscription } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { RecipesServiceService } from 'src/app/services/recipes-service.service';
import { StaticService } from 'src/app/services/static.service';


@Component({
  selector: 'app-statistics',
  templateUrl:'./statistics.component.html',
  styleUrls: ['./statistics.component.scss']

})
export class StatisticsComponent {
  dateTimeData: Date = new Date();

  constructor(private staticServ:StaticService){}
  
  ViewCounter$:Observable<number>;
  FavoriteCounter$:Observable<number>;
  currentDate:Date;
  private sub1 = new Subscription();
  private sub2 = new Subscription();
  counterGreaterThanZero1: boolean = false;
  counterGreaterThanZero2: boolean = false;

ngOnInit(): void {
  this.ViewCounter$=this.staticServ.ViewsCounter$;
  this.FavoriteCounter$=this.staticServ.loves$;
  this.sub1=this.staticServ.ViewsCounter$.subscribe();
  this.sub2=this.staticServ.loves$.subscribe();
  this.currentDate = new Date();
  this.ViewCounter$.subscribe(value => {
    this.counterGreaterThanZero1 = value > 0;
  });
  this.FavoriteCounter$.subscribe(value => {
    this.counterGreaterThanZero2 = value > 0;
   });
}
}
  

