import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import * as StoreActions from '../../store/actions';
import { LOGGED_USER_DETAILS }from '../../shared/constants'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private author = LOGGED_USER_DETAILS.author;
  public userLoggedIn: boolean;
  public imgPath = '../../../assets/images/logo.png';
  constructor( private store: Store<IAppState> ) {
    this.userLoggedIn = false;
  }

  ngOnInit() { }

  login(): void {
    if (!this.userLoggedIn) {
      this.userLoggedIn = true;
      this.store.dispatch( new StoreActions.loginUser(this.author));

    } else {
      this.userLoggedIn = false;
      this.store.dispatch( new StoreActions.loginUser(''));
    }
  }
}
