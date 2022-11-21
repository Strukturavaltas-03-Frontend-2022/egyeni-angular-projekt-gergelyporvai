import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  menuItems: IMenuItem[] = [
    { text: 'Home', link: '/', icon: 'home' },
    { text: 'Family', link: '/family' },
    { text: 'Solo', link: '/solo' },
    { text: 'Admin', link: '/admin' },
  ];

  constructor() {}
}
