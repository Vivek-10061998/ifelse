import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-com',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './new-com.component.html',
  styleUrl: './new-com.component.scss'
})
export class NewComComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  

  }
  getButton(){
    console.log("Button clicked");
    alert("Button clicked");
  }
}
