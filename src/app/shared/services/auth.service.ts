import { HttpClient, HttpHeaders } from "@angular/common/http";
import { stringify } from "@angular/compiler/src/util";
import { Injectable } from "@angular/core";
import {catchError, map, tap} from 'rxjs/internal/operators';

@Injectable()
export class AuthService {
    constructor(private httpClient: HttpClient){}

    onSignUp(data: any) {
        // const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8')    
        console.log(data);
         return this.httpClient.post('http://localhost:8085/api/person/account',data);
        
 }

  onSignIn(data: any) {
        return this.httpClient.post('http://localhost:8085/api/account/login',data).pipe(tap(
            (response: any) => {
                localStorage.setItem('token', response['token']);
                localStorage.setItem('expire_in', response['expire_in']);
            }
        )
        )
    }
}
