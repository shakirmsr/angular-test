import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroItemsService } from '../hero-items.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes:Hero[];

  getHeroes():void{
    this.heroservice.getHeroes().subscribe(heroes => this.heroes = heroes.slice(0, 2));
  }
  constructor(private heroservice:HeroItemsService) { }

  ngOnInit() {
    this.getHeroes();
  }

}
