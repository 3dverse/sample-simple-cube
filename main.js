//------------------------------------------------------------------------------
import { publicToken, sceneUUID } from "./config.js";

//------------------------------------------------------------------------------
export function HACK_setupDevEnv() {
  SDK3DVerse.setApiVersion("v1");
  SDK3DVerse.setApiVersion = () => {};
  SDK3DVerse.webAPI.setURL("https://api.3dverse.dev/app/v1");
  SDK3DVerse.defaultEditorURL = "wss://editor-backend.3dverse.dev";
}

//------------------------------------------------------------------------------
window.addEventListener("load", InitApp);

//------------------------------------------------------------------------------
async function InitApp() {
  HACK_setupDevEnv();

  await SDK3DVerse.joinOrStartSession({
    userToken: publicToken,
    sceneUUID,
    canvas: document.getElementById("display-canvas"),
    viewportProperties: {
      defaultControllerType: SDK3DVerse.controller_type.orbit,
    },
  });
}
