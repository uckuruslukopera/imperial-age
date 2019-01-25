import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  title$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() { }

  setTitle(title: string) {
    this.title$.next(title);
  }
}
