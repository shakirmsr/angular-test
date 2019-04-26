import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Hero } from '../hero'; 
import { NgForm } from '@angular/forms';
// import { heroesList } from '../heroe-list';

import { HeroItemsService } from '../hero-items.service';
import { heroesList } from '../heroe-list';
// import { MessagesService } from '../messages.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // @ViewChild('heroForm') form: NgForm;

  // hero:Hero =  {
  //   id : 1,
  //   name : "John"
  // }
  // heroes = heroesList;
  // myMessage:string[];

  heroes:Hero[];
  // getHeroItems() : void{
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroItems() : void{
    this.heroService.getHeroes().subscribe(myHeroes => this.heroes = myHeroes);
  }

  selectedHero:Hero;
  selectedHeroDetail(hero:Hero):void {
    this.selectedHero = hero;
  }
  constructor(private heroService : HeroItemsService) { }

  ngOnInit() {
    this.getHeroItems();
  }

  // formSubmitted() {
  //   // if (this.form.submitted) alert('Form submitted');
  //   // if (this.form.invalid) alert('Invalid form data');
  // }

}
