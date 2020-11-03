import { Injectable } from '@angular/core';
import { Senator } from './senator'
import { SENATORS } from './mock-senators'
import { Observable, of } from 'rxjs';
import { MessageService } from './messgage.service';

@Injectable({
  providedIn: 'root'
})
export class SenatorService {

  constructor(private messageService: MessageService) { }
}

  getSenators():Observable<Senator[]> {
    this.messageService.add('SenatorService: fetched senators')
      return of(SENATORS);
  }
