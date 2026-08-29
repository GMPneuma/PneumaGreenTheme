const MODULE_ID = "pneuma-green-theme";
const ENABLED_SETTING_KEY = "enabled";
const MODE_SETTING_KEY = "mode";
const STYLESHEET_ID = "pneuma-green-theme-stylesheet";
const STYLESHEET_PATH = `modules/${MODULE_ID}/styles/pneuma-green-theme.css`;
const MODE_CLASSES = [
  `${MODULE_ID}-force-light`,
  `${MODULE_ID}-force-dark`
];

function setThemeMode(mode) {
  document.documentElement.classList.remove(...MODE_CLASSES);
  if (mode === "light" || mode === "dark") {
    document.documentElement.classList.add(`${MODULE_ID}-force-${mode}`);
  }
}

function setThemeEnabled(enabled) {
  const currentStylesheet = document.getElementById(STYLESHEET_ID);

  if (!enabled) {
    currentStylesheet?.remove();
    document.documentElement.classList.remove(MODULE_ID, ...MODE_CLASSES);
    return;
  }

  document.documentElement.classList.add(MODULE_ID);
  setThemeMode(game.settings.get(MODULE_ID, MODE_SETTING_KEY));
  if (currentStylesheet) return;

  const stylesheet = document.createElement("link");
  stylesheet.id = STYLESHEET_ID;
  stylesheet.rel = "stylesheet";
  stylesheet.href = foundry.utils.getRoute(STYLESHEET_PATH);
  document.head.append(stylesheet);
}

Hooks.once("init", () => {
  game.settings.register(MODULE_ID, ENABLED_SETTING_KEY, {
    name: "Use Green Theme",
    hint: "Apply Pneuma's Green Theme for this player on this device.",
    scope: "client",
    config: true,
    type: Boolean,
    default: true,
    onChange: setThemeEnabled
  });

  game.settings.register(MODULE_ID, MODE_SETTING_KEY, {
    name: "Theme Mode",
    hint: "Follow Foundry and CPR appearance settings, or force the Pneuma palette to remain light or dark for this player.",
    scope: "client",
    config: true,
    type: String,
    choices: {
      automatic: "Follow Foundry / CPR",
      light: "Force Light",
      dark: "Force Dark"
    },
    default: "automatic",
    onChange: setThemeMode
  });

  setThemeEnabled(game.settings.get(MODULE_ID, ENABLED_SETTING_KEY));
});
