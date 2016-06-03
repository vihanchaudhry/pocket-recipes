import {Page, NavController} from "ionic-angular";
import {Component} from "angular2/core";
import "rxjs/Rx";
import {Http, Headers, HTTP_BINDINGS} from "angular2/http";
import {FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl} from "angular2/common";

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
  ingredients: AbstractControl;
  directions: AbstractControl;

  constructor(public nav: NavController, public fb: FormBuilder) {
    this.recipeForm = fb.group({
      "name": ["", Validators.compose([Validators.required, Validators.minLength(3)])],
      "description": ["", Validators.compose([Validators.required])],
      "prepTime": "",
      "cookingTime": ["", Validators.compose([Validators.required])],
      "ingredients": ["", Validators.compose([Validators.required])],
      "directions": ["", Validators.compose([Validators.required])]
    });

    this.name = this.recipeForm.controls["name"];
    this.description = this.recipeForm.controls["description"];
    this.prepTime = this.recipeForm.controls["prepTime"];
    this.cookingTime = this.recipeForm.controls["cookingTime"];
    this.ingredients = this.recipeForm.controls["ingredients"];
    this.directions = this.recipeForm.controls["directions"];
  }

  onSubmit(value: string): void {
    if (this.recipeForm.valid) {
      console.log("Submitted value: ", value);
    }
  }
}
