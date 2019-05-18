import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { MapViewModel } from "./map-view-model";
// NEW
import { EventData } from 'tns-core-modules/data/observable';


export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new MapViewModel();
}