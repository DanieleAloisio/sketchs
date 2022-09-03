import { Component, OnInit } from '@angular/core';
import { IArtist } from 'src/app/models/IArtist';
import { AuthJwtService } from 'src/service/authJwt.service';
import { SketchsService } from 'src/service/data/sketchs.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username!: string
  loggedArtist!: IArtist

  constructor(public authService: AuthJwtService, public sketchService: SketchsService) { }

  ngOnInit(): void {

    if (this.authService.isLogged()) {

      this.username = this.authService.loggedUser()!
      this.sketchService.getLoggedArtist(this.username).subscribe(data => {
        this.loggedArtist = data
        console.log(this.loggedArtist)
      });
    }
  }

}
