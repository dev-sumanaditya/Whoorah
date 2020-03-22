import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, RouterEvent, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import * as $ from 'jquery';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public showMenu: Boolean = false;
  public showModal: Boolean = false;
  public showPass: Boolean = false;

  public loading: Boolean = false;
  public showDark: Boolean = false;


  constructor(private router: Router) {
    this.router.events.subscribe(this.Interceptor);
  }

  ngOnInit() {
    if (this.router.url !== '/') {
      this.showDark = false;
    } else {
      this.showDark = true;
    }

    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url !== '/') {
          this.showDark = false;
        } else {
          this.showDark = true;
        }
      }
    });
  }

  Interceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
      console.log(this.loading);
      $('#loading').removeClass('hide');
      return;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => {
        this.loading = false;
        this.showMenu = false;
        console.log(this.loading);
        $('#loading').addClass('hide');
      }, 1000);
      return;
    }
    if (event instanceof NavigationCancel) {
      setTimeout(() => {
        this.loading = false;
        console.log(this.loading);
        $('#loading').addClass('hide');
      }, 1000);
      return;
    }
    if (event instanceof NavigationError) {
      setTimeout(() => {
        this.loading = false;
        console.log(this.loading);
        $('#loading').addClass('hide');
      }, 1000);
      return;
    }
  }

  public toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  public modal() {
    this.showModal = true;
  }
  public hide() {
    this.showModal = false;
    this.showPass = false;
  }
  public verifyEmail() {
    this.showPass = true;
  }
}
