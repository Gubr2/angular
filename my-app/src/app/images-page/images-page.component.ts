import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images/images.service';

@Component({
  selector: 'app-images-page',
  templateUrl: './images-page.component.html',
  styleUrls: ['./images-page.component.scss'],
})
export class ImagesPageComponent implements OnInit {
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
