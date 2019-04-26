import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = '/user/';

  constructor(private http: HttpClient) {
  }

  fetchAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + '/all');
  }

  updateUser(user: User) {
    return this.http.put<User[]>(this.baseUrl + user._id + '/update', user);
  }

  addUser(user: User) {
    let header: HttpHeaders = new HttpHeaders();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post<User[]>(this.baseUrl + 'create', user, {headers: header});
  }


  deleteUser(user: User) {
    return this.http.delete<User[]>(this.baseUrl + user._id + '/delete');
  }

}
