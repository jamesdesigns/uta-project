import { Observable } from "tns-core-modules/data/observable";
// NEW
import * as geolocation from "nativescript-geolocation";
// used to describe at what accuracy the location should be get
// import { Accuracy } from "ui/enums"; 
export class MapViewModel extends Observable {
    constructor() {
        super();
    }

    lat = "";
    lon = "";
    speed = "";
    addr = "";

    getLocation(args): void {
        geolocation.getCurrentLocation({ maximumAge: 5000, timeout: 20000 })
            .then(res => {
                this.set("lat", res.latitude);
                this.set("lon", res.longitude);
                this.set("speed", res.speed);
                // get the address (REQUIRES YOUR OWN GOOGLE MAP API KEY!)
                fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + res.latitude + "," + res.longitude + "&key=YOUR-API-KEY")
                    .then((response) => response.json()).then((r) => {
                        this.set("addr", r.results[0].formatted_address);
                    });
            });
    }
}
