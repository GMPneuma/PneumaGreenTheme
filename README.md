# Pneuma's Green Theme

A CSS-only green visual theme for the Cyberpunk RED Core system in Foundry Virtual Tabletop.

## Compatibility

- Foundry Virtual Tabletop 12
- Cyberpunk RED Core

The module contains no JavaScript and makes no changes to actors, items, scenes, or world data.

## Installation

Install the latest manifest URL in Foundry's module browser:

`https://github.com/GMPneuma/PneumaGreenTheme/releases/latest/download/module.json`

Then enable **Pneuma's Green Theme** in the world's module settings.

## Development

The complete theme is in `styles/pneuma-green-theme.css`. Colors are defined as custom properties near the top of the file. Light and dark palettes are kept together so the visual design can be adjusted without hunting through individual component rules.

### Theme terminology

Foundry and Cyberpunk RED Core each have an independent appearance setting:

- **Foundry UI Light/Dark** means **Core → Preferred Color Scheme**.
- **CPR Sheet Light/Dark** means **Cyberpunk RED - CORE → Theme**.

The stylesheet supports all four combinations of those settings.
