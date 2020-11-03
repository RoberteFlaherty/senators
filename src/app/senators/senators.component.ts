import { Component, OnInit } from '@angular/core';
import { Senator } from '../senator';
import { SenatorService } from '../senator.service';
import { MessageService } from '../message.service';
import { FlexLayoutModule } from '@angular/flex-layout';


@Component({
  selector: 'app-heroes',
  templateUrl: './senators.component.html',
  styleUrls: ['./senators.component.css']
})
export class SenatorsComponent implements OnInit {

  senators: Senator[];
  selectedSenator:Senator;

  constructor(private senatorService: SenatorService, private messageService: MessageService) { }

  ngOnInit()  {
    this.getSenators();
  }

  getSenators() : void {
    this.senatorService.getSenators()
    .subscribe(senators => this.senators = senators);
  }

  onSelect(senator: Senator): void {
    this.selectedSenator = senator;
    this.messageService.add('SenatorsComponent: selected senator id=${senator.id}');

  }
}
