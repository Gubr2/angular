import { Component, OnInit } from '@angular/core';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  public images = [] as any;
  constructor(private _imagesService: ImagesService) {
    // fetch('http://localhost:4546').then((response) => {
    //   console.log(response);
    // });
  }

  ngOnInit() {
    this._imagesService.getImages().subscribe((data) => (this.images = data));
  }
}
