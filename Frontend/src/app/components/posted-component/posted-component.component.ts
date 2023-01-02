import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posted-component',
  templateUrl: './posted-component.component.html',
  styleUrls: ['./posted-component.component.css']
})
export class PostedComponentComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  goBack(){
    this.location.back();
  }

}
