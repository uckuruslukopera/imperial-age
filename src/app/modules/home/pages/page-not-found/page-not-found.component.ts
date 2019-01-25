import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent implements OnInit {
  @HostBinding('class.r-page-not-found') true;

  constructor() { }

  ngOnInit() {
  }

}
