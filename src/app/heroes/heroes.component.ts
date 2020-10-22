import { Component, OnInit } from '@angular/core';
import {Senator} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  senator: Senator = {
    id:1,
    name:"Marco Rubio",
    party:"Republican",
    state:"Florida"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
