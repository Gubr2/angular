import { Component, OnInit } from '@angular/core';
import { UploadersService } from './uploaders.service';

@Component({
  selector: 'app-uploaders',
  templateUrl: './uploaders.component.html',
  styleUrls: ['./uploaders.component.scss'],
})
export class UploadersComponent implements OnInit {
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
