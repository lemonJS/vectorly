declare module 'emojilib' {
  interface Emoji {
    category: string;
    char: string;
    fitzpatrick_scale: boolean;
    keywords: string[];
  }

  interface Lib {
    [key: string]: Emoji;
  }

  export declare const lib: {
    [key: string]: Emoji;
  }

  export declare const ordered: (keyof Lib)[];
}
