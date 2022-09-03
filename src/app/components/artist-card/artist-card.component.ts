import { Component, OnInit } from '@angular/core';
import { IArtist } from 'src/app/models/IArtist';
import { SketchsService } from 'src/service/data/sketchs.service';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {

  artists$: IArtist[] = new Array()
  
  constructor(private sketchService: SketchsService) {
    this.sketchService.getSketchs().subscribe(data => {
      this.artists$ = data
    })
  }

  ngOnInit(): void { }

}
