import { Injectable } from '@angular/core';
import { heroesList } from './heroe-list';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
@Injectable({
  providedIn: 'root'
})
export class HeroItemsService {
  getHeroes():Observable<Hero[]>{
    this.messagesService.addMessage('Fetched the heroes list');
    return of(heroesList);
  }
  
  constructor(private messagesService : MessagesService) { }
}
