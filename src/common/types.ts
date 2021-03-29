export type Joke = {
    id: number,
    safe: boolean,
    lang: "cs" | "de" | "en" | "es" | "fr" | "pt",
    type: "single" | "twopart",
    category: string,
    setup?: string,
    delivery?: string,
    flags: Flag,
    joke: string
  }
  
  export type Flag = {
    "nsfw": boolean,
    "religious": boolean,
    "political": boolean,
    "racist": boolean,
    "sexist": boolean,
    "explicit": boolean
  }