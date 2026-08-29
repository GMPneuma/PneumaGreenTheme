# Pneuma's Green Theme

A player-selectable green visual theme for the Cyberpunk RED Core system in Foundry Virtual Tabletop.

## Compatibility

- Foundry Virtual Tabletop 12
- Cyberpunk RED Core

The module makes no changes to actors, items, scenes, or world data. Its small client-side controller only loads or unloads the theme stylesheet for the current player.

The theme does not recolor chat dice artwork, allowing dice-replacement modules to display their original asset colors.

## Installation

Install the latest manifest URL in Foundry's module browser:

`https://github.com/GMPneuma/PneumaGreenTheme/releases/latest/download/module.json`

Then enable **Pneuma's Green Theme** in the world's module settings.

Each player can then open **Configure Settings → Module Settings → Pneuma's Green Theme** and independently:

- Enable or disable **Use Green Theme**.
- Set **Theme Mode** to **Follow Foundry / CPR**, **Force Light**, or **Force Dark**.

These preferences are stored locally for that player. The theme defaults to enabled and follows the existing Foundry and CPR appearance settings until the player forces a mode.

## Development

The complete theme is in `styles/pneuma-green-theme.css`. Colors are defined as custom properties near the top of the file. Light and dark palettes are kept together so the visual design can be adjusted without hunting through individual component rules. `scripts/pneuma-green-theme.js` registers the player setting and conditionally loads the stylesheet.

### Theme terminology

Foundry and Cyberpunk RED Core each have an independent appearance setting:

- **Foundry UI Light/Dark** means **Core → Preferred Color Scheme**.
- **CPR Sheet Light/Dark** means **Cyberpunk RED - CORE → Theme**.

The stylesheet supports all four combinations of those settings.
