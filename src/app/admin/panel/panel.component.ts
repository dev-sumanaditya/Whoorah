import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public dropdownStatus: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public drop() {
    this.dropdownStatus = !this.dropdownStatus;
  }

}
