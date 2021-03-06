import {App, IonicApp, Platform} from "ionic-angular";
import {StatusBar} from "ionic-native";
import {NewRecipePage} from "./pages/new-recipe/new-recipe";
import {ListPage} from "./pages/list/list";
import {AuthPage} from "./pages/auth/auth";

@App({
  templateUrl: "build/app.html",
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  rootPage: any = AuthPage;
  pages: Array<{title: string, component: any}>;

  constructor(private app: IonicApp, private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "New Recipe", component: NewRecipePage },
      { title: "List", component: ListPage },
      { title: "Auth", component: AuthPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn"t want the back button to show in this scenario
    let nav = this.app.getComponent("nav");
    nav.setRoot(page.component);
  }
}