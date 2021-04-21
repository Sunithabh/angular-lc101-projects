import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit { 
  favlinks = ["https://education.launchcode.org/js-independent-track/index.html", "https://www.launchcode.org/get-started"];  
  constructor() {}

  ngOnInit() {
    
  }

}
