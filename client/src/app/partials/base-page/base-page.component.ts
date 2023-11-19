import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrl: './base-page.component.css'
})
export class BasePageComponent implements OnInit {
  title: string;

  constructor(protected route: ActivatedRoute, protected httpService: HttpService) {
    this.title = "";
  }

  ngOnInit(): void {
    this.title = this.route.snapshot.data['title'];
  }
}