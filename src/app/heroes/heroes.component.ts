import { Component, OnInit } from '@angular/core';
import {Senator} from '../senator';
import {SENATORS} from '../senators';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  senator: SENATORS;
  selectedSenator:Senator;

  constructor() { }

  ngOnInit():  {
  }

  onSelect(senator: Senator): void {
    this.selectedSenator = senator;
  }
}
