import { Component } from '@angular/core';
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: Partial<User> = {

    username: '',
    password: ''
  };
  username: string = "";

  constructor(private route: Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  save(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe(res => {
      if(res){
        this.authService.setLoggedUser(res);
        this.route.navigateByUrl("welcome");
      }

    });
  }

}
