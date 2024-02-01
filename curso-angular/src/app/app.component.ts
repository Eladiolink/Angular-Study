import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  usarName = "Eládio Alves"
  userData = {
    email:"EladioLeal@test.com"
  }
  title = 'curso-angular';
}
