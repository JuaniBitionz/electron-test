"use strict";(self.webpackChunkelectron_test=self.webpackChunkelectron_test||[]).push([[952],{6952:(Q,p,r)=>{r.r(p),r.d(p,{AuthModule:()=>k});var f=r(6895),c=r(8869);function h(t,i,e,n,s,d,l){try{var m=t[d](l),u=m.value}catch(N){return void e(N)}m.done?i(u):Promise.resolve(u).then(n,s)}var a=r(4006),o=r(4650),g=r(9549),Z=r(4144),b=r(3336),w=r(4859),x=r(1733),y=r(6709),T=r(1572);function A(t,i){1&t&&(o.TgZ(0,"mat-error"),o._uU(1,"Este campo es obligatorio"),o.qZA())}function L(t,i){1&t&&(o.TgZ(0,"mat-error"),o._uU(1,"Este campo es obligatorio"),o.qZA())}function C(t,i){if(1&t&&(o.TgZ(0,"mat-error",29),o._uU(1),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Oqu(e.loginError)}}function U(t,i){1&t&&o._UZ(0,"mat-spinner",32)}const J=function(){return["/password-recover"]},S=function(){return["/sign-in"]},q=[{path:"",component:(()=>{class t{constructor(e,n){this.fb=e,this.router=n,this.btzGamesLogo="./assets/img/logos/btz-games-logo.svg",this.googleLogoColor="./assets/img/logos/google-logo-color.svg",this.passwordShow=!1,this.loading=!1,this.loginError=""}ngOnInit(){this.formLogin=this.fb.group({username:["",[a.kI.required]],password:["",[a.kI.required]],remember:[!1]})}get username(){return this.formLogin.get("username")}get password(){return this.formLogin.get("password")}get remember(){return this.formLogin.get("remember")}showPassword(){this.passwordShow=!this.passwordShow}login(){var e=this;return function v(t){return function(){var i=this,e=arguments;return new Promise(function(n,s){var d=t.apply(i,e);function l(u){h(d,n,s,l,m,"next",u)}function m(u){h(d,n,s,l,m,"throw",u)}l(void 0)})}}(function*(){e.router.navigate([""])})()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(a.qu),o.Y36(c.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:53,vars:14,consts:[[1,"container-fluid","login-container","text-color-light"],[3,"formGroup","ngSubmit"],[1,"row","justify-content-center"],["alt","BTZ Games",1,"btz-games-logo",3,"src"],[1,"row","justify-content-center","mt-4"],[1,"text-center"],[1,"row","justify-content-center","mt-4","login-input-row"],["appearance","fill",1,"text-input-dark"],["formControlName","username","matInput","","required",""],[4,"ngIf"],["formControlName","password","matInput","","required","",3,"type"],["matSuffix","",1,"d-flex"],["type","button","mat-icon-button",""],[1,"material-icons-outlined","mx-1",3,"click"],["type","button","matTooltip","La contrase\xf1a debe tener m\xe1s de 7 caract\xe9res, contener un n\xfamero y una letra","matTooltipPosition","above","matTooltipClass","tooltip-dark","mat-icon-button",""],[1,"material-icons-outlined","mx-1"],["class","mt-4",4,"ngIf"],[1,"row","login-input-row"],[1,"col-xs-12","col-md-4","text-start","p-0","mt-4"],["formControlName","remember"],[1,"col-xs-12","col-md-8","text-md-end","text-xs-start","p-0","mt-4"],[1,"link-light",3,"routerLink"],[1,"row","login-input-row","mt-4"],["type","submit",1,"button","button-big","button-primary","d-flex","justify-content-center","align-items-center",3,"disabled"],["diameter","30","class","me-3 dark-spinner",4,"ngIf"],[1,"row","mt-4"],[1,"login-card"],["alt","Google",3,"src"],[1,"ms-1"],[1,"mt-4"],[1,"common-subtitle","text-center"],[1,"text-light","text-center",3,"routerLink"],["diameter","30",1,"me-3","dark-spinner"]],template:function(e,n){1&e&&(o.TgZ(0,"div",0)(1,"form",1),o.NdJ("ngSubmit",function(){return n.login()}),o.TgZ(2,"div",2),o._UZ(3,"img",3),o.qZA(),o.TgZ(4,"div",4)(5,"h5",5),o._uU(6,"Inicia sesi\xf3n en tu cuenta"),o.qZA()(),o.TgZ(7,"div",6)(8,"mat-form-field",7)(9,"mat-label"),o._uU(10,"Nombre de usuario o correo electr\xf3nico"),o.qZA(),o._UZ(11,"input",8),o.qZA(),o.YNc(12,A,2,0,"mat-error",9),o.qZA(),o.TgZ(13,"div",6)(14,"mat-form-field",7)(15,"mat-label"),o._uU(16,"Contrase\xf1a"),o.qZA(),o._UZ(17,"input",10),o.TgZ(18,"div",11)(19,"button",12)(20,"mat-icon",13),o.NdJ("click",function(){return n.showPassword()}),o._uU(21),o.qZA()(),o.TgZ(22,"button",14)(23,"mat-icon",15),o._uU(24,"help"),o.qZA()()()(),o.YNc(25,L,2,0,"mat-error",9),o.qZA(),o.YNc(26,C,2,1,"mat-error",16),o.TgZ(27,"div",17)(28,"div",18)(29,"mat-checkbox",19),o._uU(30,"Recordar cuenta"),o.qZA()(),o.TgZ(31,"div",20)(32,"a",21),o._uU(33,"\xbfHas olvidado tu contrase\xf1a?"),o.qZA()()(),o.TgZ(34,"div",22)(35,"button",23),o.YNc(36,U,1,0,"mat-spinner",24),o._uU(37," Iniciar sesi\xf3n "),o.qZA()(),o.TgZ(38,"div",25)(39,"label",5),o._uU(40,"o Inicia sesi\xf3n con:"),o.qZA()(),o.TgZ(41,"div",25)(42,"div",26),o._UZ(43,"img",27),o.TgZ(44,"label",28),o._uU(45,"Google"),o.qZA()()(),o._UZ(46,"hr",29),o.TgZ(47,"div",4)(48,"label",30),o._uU(49,"\xbfNo tienes una cuenta?"),o.qZA()(),o.TgZ(50,"div",4)(51,"a",31),o._uU(52,"Crear cuenta"),o.qZA()()()()),2&e&&(o.xp6(1),o.Q6J("formGroup",n.formLogin),o.xp6(2),o.Q6J("src",n.btzGamesLogo,o.LSH),o.xp6(9),o.Q6J("ngIf",(null==n.username?null:n.username.hasError("required"))&&(null==n.username?null:n.username.touched)),o.xp6(5),o.Q6J("type",n.passwordShow?"text":"password"),o.xp6(4),o.Oqu(n.passwordShow?"visibility":"visibility_off"),o.xp6(4),o.Q6J("ngIf",(null==n.password?null:n.password.hasError("required"))&&(null==n.password?null:n.password.touched)),o.xp6(1),o.Q6J("ngIf",n.loginError),o.xp6(6),o.Q6J("routerLink",o.DdM(12,J)),o.xp6(3),o.Q6J("disabled",!1),o.xp6(1),o.Q6J("ngIf",n.loading),o.xp6(7),o.Q6J("src",n.googleLogoColor,o.LSH),o.xp6(8),o.Q6J("routerLink",o.DdM(13,S)))},dependencies:[f.O5,a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.sg,a.u,c.yS,g.TO,g.KE,g.hX,g.R9,Z.Nt,b.Hw,w.lW,x.gM,y.oG,T.$g],styles:[".btz-games-logo{width:135px!important}.login-container{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;background-color:var(--color-background-dark-primary)}.login-input-row{width:440px}span:hover{cursor:pointer}.login-card{border-radius:5px;background-color:var(--color-background-dark-secondary);width:440px;display:flex;align-items:center;justify-content:center;height:60px;transition-duration:.3s}.login-card:hover{cursor:pointer;background-color:#211e33}hr{border-top:1.5px solid white!important;width:440px}@media (max-width: 768px){.login-input-row,.login-card,hr{width:300px}}\n"],encapsulation:2}),t})()}];let F=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[c.Bz.forChild(q),c.Bz]}),t})();var I=r(5549);let k=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[f.ez,a.UX,F,I.SharedModule]}),t})()}}]);