import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  startGame(): void {
    setInterval(() => {
      console.log('sdfsd');
    }, 5000);
  }

}
