import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  btzGamesLogo: string = './assets/img/logos/btz-games-logo.svg';
  googleLogoColor: string = './assets/img/logos/google-logo-color.svg';
  passwordShow: boolean = false;

  loading: boolean = false;
  loginError: string = '';

  formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
  }
  
  ngOnInit(): void {
    this.login();
    this.formLogin = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [false]
    });
  }

  get username(){
    return this.formLogin.get('username');
  }
  get password(){
    return this.formLogin.get('password');
  }
  get remember(){
    return this.formLogin.get('remember');
  }

  showPassword(){
    this.passwordShow = !this.passwordShow;
  }

  async login(){
    const response = await this.auth.login({account: 'testing-email2@bitionz.net',password: 'a12345'});
    console.log(response);
    
    this.router.navigate([``]);
  }
}
