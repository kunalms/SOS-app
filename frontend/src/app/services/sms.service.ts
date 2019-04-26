import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
    providedIn: 'root'
})
export class SmsService {

    baseUrl = '/sms/';

    constructor(private http: HttpClient) {
    }


    sendSms(user: User, message: String): Observable<any> {
        return this.http.post<any>(this.baseUrl + '/', {
            contact: user.contact,
            message: message,
            type: 'sms',
            sentTo: user.name
        });
    }
}
