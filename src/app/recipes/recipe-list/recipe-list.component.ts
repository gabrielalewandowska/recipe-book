import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Mango Curry', 'lovely curry',
    'https://images.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-0UEdp10cF1s%2FTdOc8GOMVaI%2FAAAAAAAAL3s%2FWZpSadpzpwc%2Fs1600%2FRipe%2BMango%2BCurry%2B-1.jpg&f=1' ),
    new Recipe('Lentil Ragu', 'tasty pasta', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--563473_12.jpg?itok=EOUyLmkO'),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
  constructor() { }

  ngOnInit() {
  }

}
