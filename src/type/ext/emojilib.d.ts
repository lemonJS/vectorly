declare module 'emojilib' {
  interface EmojiLib {
    category: string;
    char: string;
    fitzpatrick_scale: boolean;
    keywords: string[];
  }

  export declare const ordered = [];
  export declare const lib: EmojiLib[] = [];
}
