import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { FavoritesViewModel } from "./favorites-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new FavoritesViewModel();
}