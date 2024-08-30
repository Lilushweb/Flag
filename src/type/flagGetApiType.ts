export interface CountryFlags {
  png: string;
  svg: string;
}

export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital?: string[] | string;
  flags: CountryFlags;
  cca2: string;
  region: string;
  subregion: string;
}

export interface AllFlagReject {
  data: Country[];
  error?: {
    message: string;
  };
}

export interface CountryDetail {
  altSpellings: string[];
  area: number;
  borders: string[];
  capital: string[];
  capitalInfo: {
    latlng: number[];
  };
  car: {
    signs: string[];
    side: string;
  };
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: {
    png: string;
    svg: string;
  };
  continents: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  demonyms: {
    [key: string]: {
      f: string; // female form
      m: string; // male form
    };
  };
  fifa: string;
  flag: string;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  gini: {
    [key: number]: number; // e.g., year: value
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  independent: boolean;
  landlocked: boolean;
  languages: {
    [key: string]: string; // e.g., language code: language name
  };
  latlng: number[];
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  population: number;
  postalCode: {
    format: string;
    regex: string;
  };
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: {
    [key: string]: {
      common: string;
      official: string;
    };
  };
  unMember: boolean;
}
