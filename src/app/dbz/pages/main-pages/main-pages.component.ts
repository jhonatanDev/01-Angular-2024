import { DbzService } from '../../service/dbz.service';
import { Character } from './../../interfaces/Character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbz-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.css']
})
export class MainPagesComponent implements OnInit {



  constructor(public dbzService:DbzService) { }

  ngOnInit() {
  }



}
