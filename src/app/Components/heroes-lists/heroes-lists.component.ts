import { Component } from '@angular/core';
import { Heroes } from 'src/app/Interfaces/heroes';

@Component({
  selector: 'app-heroes-lists',
  templateUrl: './heroes-lists.component.html',
  styleUrls: ['./heroes-lists.component.css']
})
export class HeroesListsComponent {
  hero: Heroes = {
    id: 1,
    name: 'Iron Man'
  };
}
