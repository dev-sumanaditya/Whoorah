import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.css']
})
export class PicsComponent implements OnInit {

  fileToUpload: File = null;

  public dummy = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

  constructor() { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

}
