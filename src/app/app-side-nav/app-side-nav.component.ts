import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-side-nav',
  templateUrl: './app-side-nav.component.html',
  styleUrls: ['./app-side-nav.component.scss']
})
export class AppSideNavComponent implements OnInit {
  menuList: NavMenu [];

  constructor() {
    this.menuList = [
      {
        title: 'Profile',
        icon: 'person',
        link: '/user/profile'
      },
      {
        title: 'My pets',
        icon: 'pets',
        link: '/user/pet'
      },
      {
        title: 'Veterinary',
        icon: 'vaccines',
        link: '/user/vets'
      },
      {
        title: 'Market',
        icon: 'storefront',
        link: '/user/store'
      }
    ]
  }

  ngOnInit(): void {
    
  }
}

interface NavMenu{
  title: string,
  icon: string,
  link: string,
}
