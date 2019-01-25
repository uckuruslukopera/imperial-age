import { Component, OnInit, HostBinding } from '@angular/core';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.c-header') true;
  title: string;

  constructor(
    private titleService: TitleService
  ) { }

  ngOnInit() {
    this.titleService.title$.subscribe(title => this.title = title);
  }

}
