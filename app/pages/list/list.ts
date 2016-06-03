import {Page, NavController, NavParams} from 'ionic-angular';
import "rxjs/Rx";
import {Http, Headers, HTTP_BINDINGS} from "angular2/http";
import {BackandService} from "../../services/backandService";

@Page({
  templateUrl: 'build/pages/list/list.html',
  providers: [BackandService]
})
export class ListPage {

  psearchQuery: string;
  items: string[] = [];
  fromServerData: string[] = [];

  constructor(public backandService: BackandService) {
    this.psearchQuery = "";
    this.items =  [];
    this.getItems("");
  }

  private getItems(searchbar) {
    this.backandService.useAnoymousAuth();
    this.backandService.getQuote().subscribe((data) => {
      this.items = data;

      // set q to the value of the searchbar
      let q = searchbar.value;

      // if the value is an empty string don"t filter the items
      if (!q || q.trim() === "") {
        return;
      }

      this.items = this.items.filter((v) => {
        if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      });
    });
  }
}
