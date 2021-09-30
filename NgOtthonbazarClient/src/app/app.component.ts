import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Advertisement } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient) { 

  }
  advertisements!: Advertisement[];
  title = 'otthonbazar';
  navBarCollapsed = true;

  ngOnInit() {
    this.http.get<Advertisement[]>('/api/advertisements').subscribe(resp =>
    this.advertisements = resp
    );
    }
}
