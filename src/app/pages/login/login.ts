import { Component, signal } from '@angular/core';
import { email, form, FormField, required } from '@angular/forms/signals';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  imports: [FormField],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  loginData = signal<LoginData>({
    email: '',
    password: '',
  });

  loginForm = form(this.loginData, (schema) => {
  required(schema.email);
  email(schema.email);
  required(schema.password);
});
}
