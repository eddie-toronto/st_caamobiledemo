// Demo settings for the live "Call me" callback.
// Fill these in from the Genesys Cloud demo org. Nothing here is a secret:
// the OAuth client uses PKCE or implicit grant, so there is no client secret.
window.DEMO_CONFIG = {
  // "mock" = everything simulated. "live" = "Call me" creates a real callback.
  mode: "mock",

  // Genesys Cloud region domain (Canada = cac1.pure.cloud)
  region: "cac1.pure.cloud",

  // OAuth client on the demo org
  grant: "pkce",                 // "pkce" or "implicit"
  clientId: "",                  // OAuth client ID
  redirectUri: "",               // leave blank to use this page's URL

  // Callback routing
  queueId: "",                   // CAA Demo - Member Care
  scriptId: "",                  // callback script that shows the member data

  // Who gets called
  callbackNumber: "",            // presenter's mobile, E.164, e.g. "+14165550142"
  callbackUserName: "Alex Morgan",

  // What the presenter's phone shows as the incoming caller (org outbound number)
  callerId: "",                  // E.164
  callerIdName: "CAA Member Care",

  // "Chat with us" — Genesys Web Messenger.
  // Messenger configuration: launcher visibility = "Hide until triggered by business logic".
  // Messenger deployment: allowed domains must include the GitHub Pages domain.
  webMessenger: {
    chat: "mock",                // "mock" = scripted chat, "web" = Genesys Web Messenger
    environment: "prod-cac1",    // Canada region
    deploymentId: ""             // Messenger deployment ID
  }
};
