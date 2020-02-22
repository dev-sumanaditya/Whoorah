import { Component, OnInit, HostListener } from '@angular/core';
import { VgAPI, VgFullscreenAPI } from 'videogular2/compiled/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public dummy = [
      // tslint:disable-next-line:max-line-length
      'https://img01.products.bt.co.uk/content/dam/bt/portal/images/articles/tv/hunters-key-art-prime-video.jpg/_jcr_content/renditions/landscape-desktop.764.430.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpdxuNwW8eiMJAPblIbc9jtaIVil26j75WOxpvsosupwexUo0g',
      'https://acollectivemind.files.wordpress.com/2016/01/pedro-pascal-narcos-banner.jpg',
      'https://thetempest.co/wp-content/uploads/2017/02/jessicajones.jpg',
      'https://i0.wp.com/film-book.com/wp-content/uploads/2017/12/the-punisher-tv-show-poster-banner-01-600x350.jpg?resize=600%2C350&ssl=1',
      'https://i.pinimg.com/originals/a7/02/58/a70258c998c6c31a9afabfee15b987da.jpg',
      'https://boxofficeindia.co.in/sites/default/files/whatsapp_image_2019-09-19_at_5.55.03_pm_0.jpeg',
      'https://i.ytimg.com/vi/Q1GK4eU26eQ/maxresdefault.jpg'
    ];

  private vgapi: VgAPI;
  private fsapi: VgFullscreenAPI;
  private state: Boolean = false;
  public targetVideo: Boolean = false; // do this.. check if video is selected by pointer;
  public volume = 1;
  public muted: Boolean = false;
  public lastMuteVolume: number;
  public videoplayed: Boolean = false;

  public slideLenght: number = this.dummy.length - 4;
  public slidePos = 0;
  public slideMargin = 0;


  constructor() {}
  ngOnInit() {}

  @HostListener('window:keydown', ['$event'])
  keyEvent(e: KeyboardEvent) {
    switch(e.keyCode) {
      case 32:
        e.preventDefault();
        if (this.state) {this.pause(); } else { this.play(); }
        break;
      case 38:
        e.preventDefault();
        this.volumeUp();
        break;
      case 40:
        e.preventDefault();
        this.volumeDown();
        break;
      case 39:
        e.preventDefault();
        this.forward();
        break;
      case 37:
        e.preventDefault();
        this.backward();
        break;
      case 77:
        e.preventDefault();
        this.mute();
        break;
      case 70:
        e.preventDefault();
        this.fsapi.toggleFullscreen();
        break;
      case 18:
        e.preventDefault();
        break;
      default:
        break;
    }
  }

  @HostListener('window:click', ['$event'])
  click(e: MouseEvent) {
    const target = $( e.target );
    if (target.parents('div#player').length) {
      this.targetVideo = true;
    } else {
      this.targetVideo = false;
    }
  }


  public onPlayerReady(api: VgAPI) {
    this.vgapi = api;
    this.fsapi = api.fsAPI;
    // listening video play
    this.vgapi.getDefaultMedia().subscriptions.playing.subscribe(
      () => { this.playing(); }
    );

    // listening video pause
    this.vgapi.getDefaultMedia().subscriptions.pause.subscribe(
      () => { this.pausing(); }
    );

    // listening volume change
    this.vgapi.getDefaultMedia().subscriptions.volumeChange.subscribe(
      (e) => { this.volume = e.target.volume; }
    );
  }

  play() {
    this.vgapi.play();
    this.state = true;
  }
  pause() {
    this.vgapi.pause();
    this.state = false;
  }

  volumeUp() {
    if (this.volume < 0.99) {
      this.vgapi.volume  = (this.volume + 0.1);
    }
  }
  volumeDown() {
    if (this.volume > 0.01) {
      this.vgapi.volume = (this.volume - 0.1);
    }
  }
  forward() {
    const total = this.vgapi.time.total;
    const current = this.vgapi.currentTime;
    if (total > (current + 4)) {
      this.vgapi.currentTime = current + 4;
    }
  }
  backward() {
    const total = this.vgapi.time.total;
    const current = this.vgapi.currentTime;
    if (current > 0) {
      this.vgapi.currentTime = current - 4;
    }
  }
  mute() {
    if (this.muted) { this.vgapi.volume = this.lastMuteVolume; this.muted = false; } else {
      this.lastMuteVolume = this.vgapi.volume;
      setTimeout(() => {
        this.vgapi.volume = 0;
      }, 100);
      this.muted = true;
    }
  }

  public playing() {
    this.state = true;
    this.videoplayed = true;
  }
  public pausing() {this.state = false; }

  public slideNxt() {
    if (this.slidePos < this.slideLenght) {
      const marl = (this.slidePos * 25.3) + 25.3;
      this.slideMargin = -marl;
      this.slidePos += 1;
    }
  }
  public slideBack() {
    if (this.slidePos > 0) {
      const marl = (this.slidePos * 25.3) - 25.3;
      this.slideMargin = -marl;
      this.slidePos -= 1;
    }
  }
}
