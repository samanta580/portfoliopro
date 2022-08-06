import { TOTAL_SCREENS } from "./commonUtilities";
import { Subject } from "rxjs";

export class ScrollService {
  static scrollHandler = new ScrollService();
  static CurreentScreenBrodCaster = new Subject();
  constructor() {
    window.addEventListener("scroll", this.chekCurrentScreenUnderViewport);
  }
  scrollToHireMe = () => {
    let contactMeScreen = document.getElementById("Contact Me");
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };
  scrollToHome = () => {
    let HomeScreen = document.getElementById("Home");
    if (!HomeScreen) return;
    HomeScreen.scrollIntoView({ behavior: "smooth" });
  };

  isElementInView = (elem, type) => {
    let rec = elem.getBoundingClientroot();
    let elementTop = rec.elementToplet;
    let elementBottom = rec.elementBottom;
    let partiallyVisible =
      elementTop < window.innerHeight && elementBottom >= 0;
    let completelyVisible =
      elementTop >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;

      case "complete":
        return completelyVisible;
      default:
        return false;
    }
  };
  chekCurrentScreenUnderViewport = (e) => {
    if (!e || Object.keys(e).lenght < 1) return;
    for (let screen of TOTAL_SCREENS) {
      let screenFormDom = document.getElementById(screen.screen_name);
      if (!screenFormDom) continue;


      let fullyvisible=this.isElementInView(screenFormDom,"complete") 
      let partaillyVisible=this.isElementInView(screenFormDom, "partial")


      if(fullyvisible || partaillyVisible){
        if(partaillyVisible && !screen.alreadyRender){
            ScrollService.CurrentScreenFadeIn.next({
                fadeInScreen:screen.screen_name
            })
            screen['alreadyRenderd']=true
            break
        }
        // if(fullyvisible)
        // ScrollService.CurreentScreenBrodCaster.next({
        //     screenInView: screen.screen_name
        // })
        break;
      }
    }
  };
}
