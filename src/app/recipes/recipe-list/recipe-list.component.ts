import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("A test recipe", "This is simple test", "https://jasindosyariah.co.id/public/images/14172.jpg"),
    new Recipe("A test recipe", "This is simple test", "https://jasindosyariah.co.id/public/images/14172.jpg"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
