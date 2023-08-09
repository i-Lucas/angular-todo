import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login(name: string, email: string): Observable<User> {
    return of({ name, email })
      .pipe(delay(2000));
  }

}
