import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {History} from "../models/history";

@Injectable({
    providedIn: 'root'
})
export class HistoryService {

    baseUrl = '/history/';

    constructor(private http: HttpClient) {
    }

    getAllHistory(): Observable<History[]> {
        return this.http.get<History[]>(this.baseUrl + 'all');
    }
}
