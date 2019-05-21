import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { SettingsViewModel } from "./settings-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new SettingsViewModel();
}
