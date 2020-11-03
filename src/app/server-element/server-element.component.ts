import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // None, Native, Shadow Dom
})
export class ServerElementComponent implements OnInit, DoCheck {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;

  constructor() { console.log('constructor called'); }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges called', changes);
  // }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

}
