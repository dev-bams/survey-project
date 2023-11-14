import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrl: './base-page.component.css'
})
export class BasePageComponent implements OnInit {
  title: string;

  constructor(private route: ActivatedRoute) {
    this.title = "";
  }

  ngOnInit(): void {
    this.title = this.route.snapshot.data['title'];
  }
}