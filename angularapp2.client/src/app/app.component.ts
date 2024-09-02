import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [UserComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularapp2.client';
}
