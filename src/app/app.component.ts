import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular';
  Username: string = "Carlos";

  userData = {
    email: 'carloskauan123@gmail.com',
    role: 'admin'
  };
  Age: Number = 18;
}
