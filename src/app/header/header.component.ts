import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  constructor(private authService: AuthService) { }

  scrolled = false;
  navPosition:any;
  show = false;
  loggedIn = this.authService.loggedIn();

  ngAfterViewInit(){
    this.navPosition = this.scrolledNav.nativeElement.offsetTop;
  }

  @ViewChild("scrolledMenu")
  scrolledNav!: ElementRef;

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll > this.navPosition){
          this.scrolled = true;
      } else {
          this.scrolled = false;
      }
    }

    showNavLinks(){
      this.show = !this.show;
      this.scrolled = true;
    }



}
