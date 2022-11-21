import { Component, OnInit } from '@angular/core';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  menuItems: IMenuItem[] = this.config.menuItems;

  constructor(private config: ConfigService) {}

  ngOnInit(): void {}
}
