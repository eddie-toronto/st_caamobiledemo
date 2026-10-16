# CAA Mobile + Genesys Cloud — demo app

Concept mock of the CAA member app with Genesys Cloud built in, for the CCG RFP technology demonstration. Static site, installable as a PWA, hosted on GitHub Pages.

All member data is fictional. Not a CAA production app.

## What's live and what's mocked

| Feature | Default | Live option |
|---|---|---|
| Sign-in, roadside request, AI agent chat | Mocked | — |
| **Call me** | Mocked | Real callback via `POST /api/v2/conversations/callbacks` |
| **Chat with us** | Mocked chat | Genesys Web Messenger, launcher hidden until the button is tapped |

If a live call fails, the app falls back to the mock.

## Files

- `index.html` — the whole app (phone UI, event inspector, going-live plan)
- `config.js` — demo org values. **Edit this file only.**
- `manifest.webmanifest`, `sw.js`, `icons/` — PWA install and offline cache

## Setup

1. Fill in `config.js`:
   - `mode: "live"`, `clientId`, `queueId`, `scriptId`, `callerId`, `callbackNumber` (presenter's mobile, E.164)
   - `webMessenger.chat: "web"`, `webMessenger.deploymentId`
2. Genesys Cloud demo org:
   - OAuth client (Code Authorization + PKCE, or Implicit). Redirect URI = the exact Pages URL.
   - Role with `Conversation > Callback > Create` for the presenter user.
   - Queue **CAA Demo – Member Care** with demo agents, plus a callback script that reads the participant attributes.
   - Messenger configuration: launcher visibility = **Hide until triggered by business logic**.
   - Messenger deployment: allowed domains include the Pages domain.
   - Inbound message flow that reads the custom attributes and routes to the demo queue or AI agent.
3. GitHub: Settings → Pages → deploy from branch `main`, folder `/ (root)`.
4. When you push changes, bump `CACHE` in `sw.js` so installed phones refresh.

## Install on a phone

- **iPhone (Safari):** open the Pages URL → Share → Add to Home Screen
- **Android (Chrome):** open the Pages URL → menu → Install app

On the phone the app runs full screen. On a laptop the page shows the phone frame, the event inspector and the going-live plan. Add `?app=1` to force phone mode or `?desk=1` to force laptop mode.

## Presenter tools

**More** tab → Presenter tools: shows the mode, Genesys sign-in status and the number that will be called. Connect Genesys, paste a token if the sign-in redirect misbehaves on iPhone, or reset the demo.

## Notes

- No secrets in this repo. PKCE and Implicit need only the client ID.
- Unless the GitHub org is on Enterprise Cloud with private Pages, the Pages URL is reachable by anyone who has it, even from a private repo.
