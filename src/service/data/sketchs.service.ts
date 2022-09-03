import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArtist } from 'src/app/models/IArtist';


@Injectable({
  providedIn: 'root'
})

export class SketchsService {

  server: string = "localhost";
  port: string = "44347";

  constructor(public httpClient: HttpClient) { }

  getLoggedArtist = (username: string) => {

    return this.httpClient.get<IArtist>(`https://${this.server}:${this.port}/Api/Sketchs/loggedUser/${username}`) //ALT + 0096 | ALT GR + '
  }

  getSketchs = () => {

    return this.httpClient.get<IArtist[]>(`https://${this.server}:${this.port}/Api/Sketchs/artists`) //ALT + 0096 | ALT GR + '
  }
}
