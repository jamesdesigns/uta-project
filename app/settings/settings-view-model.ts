const observableModule = require("tns-core-modules/data/observable");
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;

import { Observable } from "tns-core-modules/data/observable";

export class SettingsViewModel extends Observable {
    constructor() {
        super();
        
        const viewModel = observableModule.fromObject({
                    data: new ObservableArray([
                        { text: "Sign-In / Create Account"},
                        { text: "Map"},
                        { text: "Delays"},
                        { text: "Privacy"},
                        { text: "Notifications"},
                        { text: "Feedback"}
                    ])
                });
                return viewModel;

    }
}

