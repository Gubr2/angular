import { Component, OnInit } from '@angular/core';
import { UploadersService } from '../uploaders/uploaders.service';

@Component({
  selector: 'app-uploaders-page',
  templateUrl: './uploaders-page.component.html',
  styleUrls: ['./uploaders-page.component.scss'],
})
export class UploadersPageComponent implements OnInit {
  public uploaders = [] as any;
  constructor(private _uploadersService: UploadersService) {
    // fetch('http://localhost:4546').then((response) => {
    //   console.log(response);
    // });
  }

  ngOnInit() {
    this._uploadersService
      .getUploaders()
      .subscribe((data) => (this.uploaders = data));
  }
}
