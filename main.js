//------------------------------------------------------------------------------
import { publicToken, sceneUUID } from './config.js';

//------------------------------------------------------------------------------
window.addEventListener('load', initApp);

//------------------------------------------------------------------------------
async function initApp() {
  await SDK3DVerse.joinOrStartSession({
    userToken: publicToken,
    sceneUUID,
    canvas: document.getElementById('display-canvas'),
    viewportProperties: {
      defaultControllerType: SDK3DVerse.controller_type.orbit,
    },
  });
}
