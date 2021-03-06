/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/


import * as app from "tns-core-modules/application";


// NEW FOR SIGNUP
// const backendService = require("~/services/backend-service");
// backendService.setup(); // Initialize Kinvey Backend


// if(application.ios) {
//     GMSServices.provideAPIKey("AIzaSyBErqQxBYZtDEDr6IkdfaBkh2a7asZ3Ub4");
//   }

// if(platform.isIOS) {
//     GMSServices.provideAPIKey("AIzaSyBErqQxBYZtDEDr6IkdfaBkh2a7asZ3Ub4");
//   }

app.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
