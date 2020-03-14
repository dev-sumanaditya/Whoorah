import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public dummy = [1,1,1,1];

  public bBoy = '0';
  public tMountain = '0';
  public scp = 0;
  public scp2 = 0;
  ngOnInit() {
    const viewportHeight = $(window).height();

    $(document).scroll(() => {
      const top = $(document).scrollTop();
      const height = $(document).height() - viewportHeight;
      const scrollPercentage = Math.round((top / height) * 100);
      this.scp = scrollPercentage / 2;
      this.scp2 = scrollPercentage / 2;
      const marginPercentage = (scrollPercentage / 5) + '%';
      this.bBoy = '-' + marginPercentage;
      this.tMountain = '-' + marginPercentage;
    });
  }

  public styleObject() {
    return {
      top: this.tMountain,
      filter: 'grayscale(' + this.scp + '%)'
    }
  }
  public styleObject2() {
    return {
      bottom: this.bBoy,
      filter: 'grayscale(' + this.scp2 + '%)'
    }
  }
}
