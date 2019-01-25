import { Component, OnInit, HostBinding } from '@angular/core';
import { TitleService } from 'src/app/modules/core/services/title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  @HostBinding('class.r-home') true;

  constructor(
    private titleService: TitleService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Home Page');
  }

}
