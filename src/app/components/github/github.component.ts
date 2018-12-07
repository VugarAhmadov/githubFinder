import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import * as moment from 'moment';

// Models
import { Users } from '../../models/Users';
import { User } from 'src/app/models/User';
import { Repo } from '../../models/Repo';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  username: string;

  users: Users['items'];
  user: User;
  repos: Repo[];

  user_created_at: string;
  // loader: boolean = false;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
  }

  searchUser(event) {
    let user: string = event.query; 
    this.githubService.searchUser(user).subscribe(users => {
      this.users = users.items;
    });
  }

  selectedUser(username) {
    this.githubService.getUser(username).subscribe(user => {
      this.user = user;

      this.user_created_at = moment(user.created_at).format('DD MMMM YYYY');

      // this.loader = true;
    });

    this.githubService.getRepos(username).subscribe(repos => {
      this.repos = repos;
    });
  }
}