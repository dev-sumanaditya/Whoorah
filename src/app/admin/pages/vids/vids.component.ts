import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vids',
  templateUrl: './vids.component.html',
  styleUrls: ['./vids.component.css']
})
export class VidsComponent implements OnInit {

  fileToUpload: File = null;

  public dummy = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

  constructor() { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

}
