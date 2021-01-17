interface Config {
  styles: {
    [key: string]: string | null;
  }
}

export const config: Config = {
  styles: {
    'primary': '#6946F6',
    'background': '#e5e5e5',
    'foreground': '#ffffff',

    'gray-100': '#eeeeee',
    'gray-200': '#cccccc',
    'gray-300': '#bbbbbb',
    'gray-500': '#999999',
    'gray-700': '#111111',

    'border-radius-sm': '.25rem',
    'border-radius-md': '.5rem'
  }
}

export const cssVariables = Object
  .entries(config.styles)
  .reduce((acc, [key, value]) => {
    acc += `--${key}: ${value ?? 'none'};\n`;
    return acc;
  }, '');
