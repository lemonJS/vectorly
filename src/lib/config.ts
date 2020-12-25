interface Config {
  styles: {
    [key: string]: string | null;
  }
}

export const config: Config = {
  styles: {
    // Accent Colors:
    'primary-accent-color': '#4aacd9',
    'tertiary-accent-color': '#e66767',

    // Backgrounds:
    'background-color': '#ebeff2',
    'foreground-color': '#ffffff',

    // Layout
    'header-background-color': '#ffffff',
    'sidebar-background-color': '#36404a',
    'sidebar-navigation-background-color': '#283037',

    // Buttons
    'primary-button-background-color': '#4aacd9',
    'primary-button-border-color': '#51aacc',
    'primary-button-text-color': '#ffffff',

    'secondary-button-background-color': null,
    'secondary-button-border-color': '#d9e0e6',
    'secondary-button-text-color': '#d9e0e6',

    'tertiary-button-background-color': null,
    'tertiary-button-border-color': '#e66767',
    'tertiary-button-text-color': '#e66767',

    // Text
    'primary-text-color': '#2a2e37',
    'secondary-text-color': '#878787'
  }
}

export const cssVariables = Object
  .entries(config.styles)
  .reduce((acc, [key, value]) => {
    acc += `--${key}: ${value ?? 'none'};\n`;
    return acc;
  }, '');
