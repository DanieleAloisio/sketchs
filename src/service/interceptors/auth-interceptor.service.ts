import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthJwtService } from '../authJwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private JwtAuth: AuthJwtService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let AuthHeader : string = "";
    var AuthToken =  sessionStorage.getItem("AuthToken");

    if (AuthToken != null)
      AuthHeader = AuthToken;

    if (this.JwtAuth.loggedUser())
    {
      req = req.clone({
        setHeaders : {Authorization : AuthHeader}
      });
    }

    return next.handle(req);

  }

}
