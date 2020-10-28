import { Component, OnInit } from '@angular/core';
import { Senator } from '../senator';
import { SENATORS } from '../mock-senators';


@Component({
  selector: 'app-heroes',
  templateUrl: './senators.component.html',
  styleUrls: ['./senators.component.css']
})
export class SenatorsComponent implements OnInit {

  senators = SENATORS;
  selectedSenator:Senator;

  constructor() { }

  ngOnInit()  {
  }

  onSelect(senator: Senator): void {
    this.selectedSenator = senator;
  }
}
