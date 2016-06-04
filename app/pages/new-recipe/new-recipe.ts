import {Page, NavController} from "ionic-angular";
import {Component} from "angular2/core";
import "rxjs/Rx";
import {Http, Headers, HTTP_BINDINGS} from "angular2/http";
import {FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, Control, AbstractControl} from "angular2/common";

@Page({
  templateUrl: "build/pages/new-recipe/new-recipe.html",
  directives: [FORM_DIRECTIVES]
})
export class NewRecipePage {

  recipeForm: ControlGroup;
  name: AbstractControl;
  description: AbstractControl;
  prepTime: AbstractControl;
  cookingTime: AbstractControl;
  ingredients: AbstractControl[];
  directions: AbstractControl[];

  constructor(public nav: NavController, public fb: FormBuilder) {
    this.recipeForm = fb.group({
      "name": ["", Validators.compose([Validators.required, Validators.minLength(3)])],
      "description": ["", Validators.compose([Validators.required, Validators.maxLength(140)])],
      "prepTime": ["", Validators.compose([Validators.pattern("^[0-9]*$")])],
      "cookingTime": ["", Validators.compose([Validators.required, Validators.pattern("^[0-9]*$")])],
      "ingredient1": ["", Validators.compose([Validators.required])],
      "direction1": ["", Validators.compose([Validators.required])]
    });

    this.ingredients = [];

    this.name = this.recipeForm.controls["name"];
    this.description = this.recipeForm.controls["description"];
    this.prepTime = this.recipeForm.controls["prepTime"];
    this.cookingTime = this.recipeForm.controls["cookingTime"];
    this.ingredients = [
      this.recipeForm.controls["ingredient1"]
      ];
    this.directions = [
      this.recipeForm.controls["direction1"]
    ];
  }

  onSubmit(value: string): void {
    if (this.recipeForm.valid) {
      console.log("Submitted value: ", value);
    }
  }

  addIngredientRow(event: Event): void {
    event.preventDefault();
    let name = "ingredient" + (this.ingredients.length + 1);

    this.recipeForm.addControl(name, new Control("", Validators.required));
    this.ingredients.push(this.recipeForm.controls[name]);
  }

  addDirectionRow(event: Event): void {
    event.preventDefault();
    let name = "direction" + (this.directions.length + 1);

    this.recipeForm.addControl(name, new Control("", Validators.required));
    this.directions.push(this.recipeForm.controls[name]);
  }
}
