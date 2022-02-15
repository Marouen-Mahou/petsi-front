import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserModel } from '../models/user.model';
import { NavMenu } from '../models/nav_menu.model';

@Component({
  selector: 'app-app-side-nav',
  templateUrl: './app-side-nav.component.html',
  styleUrls: ['./app-side-nav.component.scss']
})
export class AppSideNavComponent implements OnInit {
  menuList: NavMenu [];
  user = this.authService.decodeToken() as UserModel;
  role = this.user.role;

  constructor(private authService: AuthService) {
    if (this.role == "pet owner"){
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
    }else{

      this.menuList = [
        {
          title: 'Profile',
          icon: 'person',
          link: '/vet/profile'
        },
        {
          title: 'Patients',
          icon: 'pets',
          link: '/vet/patients'
        },
        {
          title: 'Requests',
          icon: 'storefront',
          link: '/vet/requests'
        }
      ]
    }
  }

  ngOnInit(): void {
  }

}


