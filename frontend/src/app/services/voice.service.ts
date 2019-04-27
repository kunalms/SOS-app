import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VoiceService {

  baseUrl = '/voice/';

  constructor(private http: HttpClient) {
  }

  establishCall(user: User, receiver: String): Observable<any> {
    return this.http.post<any>(this.baseUrl , {
      caller: user.contact,
      receiver: receiver,
      type: 'call',
      sentTo: user.name,
      sentFrom: 'You'
    });
  }
}
