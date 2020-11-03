import { Component, OnInit, Input } from '@angular/core';
import { Senator } from '../senator';

@Component({
  selector: 'app-senator-detail',
  templateUrl: './senator-detail.component.html',
  styleUrls: ['./senator-detail.component.css']
})
export class SenatorDetailComponent implements OnInit {
  @Input() senator: Senator;
  constructor() { }

  ngOnInit(){
  }

}
