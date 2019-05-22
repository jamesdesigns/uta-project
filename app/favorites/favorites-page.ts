import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { FavoritesViewModel } from "./favorites-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new FavoritesViewModel();
}

function reqListener () {
    console.log(this.responseText);
  }
  
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "http://api.rideuta.com/SIRITEST/SIRI.svc/CloseStopmonitor?latitude=40.696629000&longitude=-112.044376000&route=&numberToReturn=5&usertoken=UTBPQBM0LFQ");
  oReq.send();

