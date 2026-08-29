const MODULE_ID = "pneuma-green-theme";
const SETTING_KEY = "enabled";
const STYLESHEET_ID = "pneuma-green-theme-stylesheet";
const STYLESHEET_PATH = `modules/${MODULE_ID}/styles/pneuma-green-theme.css`;

function setThemeEnabled(enabled) {
  const currentStylesheet = document.getElementById(STYLESHEET_ID);

  if (!enabled) {
    currentStylesheet?.remove();
    document.documentElement.classList.remove(MODULE_ID);
    return;
  }

  document.documentElement.classList.add(MODULE_ID);
  if (currentStylesheet) return;

  const stylesheet = document.createElement("link");
  stylesheet.id = STYLESHEET_ID;
  stylesheet.rel = "stylesheet";
  stylesheet.href = foundry.utils.getRoute(STYLESHEET_PATH);
  document.head.append(stylesheet);
}

Hooks.once("init", () => {
  game.settings.register(MODULE_ID, SETTING_KEY, {
    name: "Use Green Theme",
    hint: "Apply Pneuma's Green Theme for this player on this device.",
    scope: "client",
    config: true,
    type: Boolean,
    default: true,
    onChange: setThemeEnabled
  });

  setThemeEnabled(game.settings.get(MODULE_ID, SETTING_KEY));
});
