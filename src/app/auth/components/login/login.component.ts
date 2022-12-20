import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit(): void {
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
    // this.loading = true;
    // this.loginError = '';
    // try {
    //   const body = {
    //     account: this.username?.value,
    //     password: this.password?.value,
    //     keepMeSigned: this.remember?.value
    //   }
    //   // console.log(body);
    //   const response = await this.auth.login(body);
    //   if(this.remember?.value){
    //     this.cookie.set('session_btz_games', response['jwt'], 28, '/');
    //   }else{
    //     this.cookie.set('session_btz_games', response['jwt'], 0, '/');
    //   }
    //   this.router.navigate([``])
    //   this.loading = false;
    //   //FALTA GUARDAR JWT      
    // } catch (error) {
    //   this.loginError = error as string;
    //   this.loading = false;
    // }
  }
}
