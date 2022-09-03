import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthJwtService } from 'src/service/authJwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  autenticato: boolean = true;

  constructor(private authService: AuthJwtService, private route: Router) { }

  ngOnInit(): void {
  }

  gestAuth = (): void => {

    this.authService.autenticaService(this.username, this.password).subscribe({
      next: () => {
        this.route.navigate(['sketchs']);
      },
      error: () => {
        this.autenticato = false;
      }
    });
  }

}
