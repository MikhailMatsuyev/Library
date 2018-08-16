import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, RouterStateSnapshot,
    Router
} from '@angular/router';
import { LibraryComponent } from './library/library.component';

@Injectable()
export class LibraryFirstGuard {
    private firstNavigation = true;

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component !== LibraryComponent) {
                this.router.navigateByUrl('/');
                return false;
            }
        }
        return true;
    }
}
