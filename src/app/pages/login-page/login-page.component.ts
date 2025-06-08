import { Component } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginImageComponent } from './login-image/login-image.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginFormComponent, LoginImageComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {}
