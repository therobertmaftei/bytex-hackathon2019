import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public init(): void { }

  public login(force: boolean = false): void { }

  public logout(): void { }

  public launchApp(): void { }

  public clearSession(): void { }
}
