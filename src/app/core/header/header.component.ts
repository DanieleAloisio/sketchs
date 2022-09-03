import { Component, OnInit } from '@angular/core';
import { IArtist } from 'src/app/models/IArtist';
import { AuthJwtService } from 'src/service/authJwt.service';
import { SketchsService } from 'src/service/data/sketchs.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username!: string
  loggedArtist!: IArtist

  constructor(public authService: AuthJwtService, public sketchService: SketchsService) {}

  ngOnInit(): void {}


}
