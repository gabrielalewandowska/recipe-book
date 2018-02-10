import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
   private recipes: Recipe[] = [
        new Recipe('Mango Curry', 'lovely curry',
            'https://images.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-0UEdp10cF1s%2FTdOc8GOMVaI%2FAAAAAAAAL3s%2FWZpSadpzpwc%2Fs1600%2FRipe%2BMango%2BCurry%2B-1.jpg&f=1',
            [new Ingredient('mango', 2),
            new Ingredient('rice', 500),
            new Ingredient('coriander', 1)]),
        new Recipe('Lentil Ragu', 'tasty pasta',
            'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--563473_12.jpg?itok=EOUyLmkO',
            [new Ingredient('red lentils', 500),
            new Ingredient('spaghetti', 500),
            new Ingredient('walnuts', 50)]),
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}