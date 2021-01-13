interface Config {
  styles: {
    [key: string]: string | null;
  }
}

export const config: Config = {
  styles: {
    // Accent Colors:
    'primary-accent-color': '#6946F6',
    'secondary-accent-color': '#bbbbbb',
    'tertiary-accent-color': '#e66767',

    // Backgrounds:
    'background-color': '#e5e5e5',
    'foreground-color': '#ffffff',

    // Layout
    'header-background-color': '#ffffff',
    'sidebar-background-color': '#36404a',
    'sidebar-navigation-background-color': '#283037',

    // Buttons
    'primary-button-background-color': '#6946F6',
    'primary-button-border-color': '#6946F6',
    'primary-button-text-color': '#ffffff',

    'secondary-button-background-color': null,
    'secondary-button-border-color': '#d9e0e6',
    'secondary-button-text-color': '#d9e0e6',

    'tertiary-button-background-color': null,
    'tertiary-button-border-color': '#e66767',
    'tertiary-button-text-color': '#e66767',

    // Text
    'primary-text-color': '#111',
    'secondary-text-color': '#878787'
  }
}

export const cssVariables = Object
  .entries(config.styles)
  .reduce((acc, [key, value]) => {
    acc += `--${key}: ${value ?? 'none'};\n`;
    return acc;
  }, '');
