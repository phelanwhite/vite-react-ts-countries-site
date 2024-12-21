export type CountryCardType = {
  cca2: string;
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
  flags: {
    svg: string;
    png: string;
    alt: string;
  };
  population: number;
  region: string;
  capital: string[];
};
export type CountryDetailType = {
  cca2: string;
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

  flags: {
    svg: string;
    png: string;
    alt: string;
  };
  population: number;
  region: string;
  capital: string[];

  borders: string[];
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  subregion: string;
};
