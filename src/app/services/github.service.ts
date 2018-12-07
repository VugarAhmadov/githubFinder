import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Users } from '../models/Users';
import { User } from '../models/User';
import { Repo } from '../models/Repo';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private client_id = '35d48130fbf4bdf57af1';
  private client_secret = '4c50cdc46599aead0751ca7118eb4fc34de64667';

  constructor(private httpClient: HttpClient) { }

  searchUser(user): Observable<Users> {
    return this.httpClient.get<Users>(`https://api.github.com/search/users?q=${user}&client_id=${this.client_id}&client_secret=$${this.client_secret}`)
  }

  getUser(username): Observable<User> {
    return this.httpClient.get<User>(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=$${this.client_secret}`);
  }

  getRepos(username): Observable<Repo[]> {
    return this.httpClient.get<Repo[]>(`https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=$${this.client_secret}&sort=created&order=asc`);
  }
}
