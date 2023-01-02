export const availableCurrencies = [
  "USD",
  "BRL",
  "CAD",
  "EUR",
  "GBP",
  "ARS",
  "JPY",
  "CHF",
  "AUD",
  "CNY",
  "ILS",
  "SGD",
  "AED",
  "DKK",
  "HKD",
  "MXN",
  "NOK",
  "NZD",
  "PLN",
  "SAR",
  "SEK",
  "THB",
  "TRY",
  "TWD",
  "ZAR",
  "CLP",
  "PYG",
  "UYU",
  "COP",
  "PEN",
  "BOB",
  "RUB",
  "INR",
] as const;

export const currencyNames = {
  AED: "Dirham dos Emirados",
  ARS: "Peso Argentino",
  AUD: "Dólar Australiano",
  BRL: "Real Brasileiro",
  BOB: "Boliviano",
  CAD: "Dólar Canadense",
  CHF: "Franco Suíço",
  CLP: "Peso Chileno",
  CNY: "Yuan Chinês",
  COP: "Peso Colombiano",
  DKK: "Coroa Dinamarquesa",
  EUR: "Euro",
  GBP: "Libra Esterlina",
  HKD: "Dólar de Hong Kong",
  ILS: "Novo Shekel Israelense",
  INR: "Rúpia Indiana",
  JPY: "Iene Japonês",
  MXN: "Peso Mexicano",
  NOK: "Coroa Norueguesa",
  NZD: "Dólar Neozelandês",
  PEN: "Sol do Peru",
  PLN: "Zlóti Polonês",
  PYG: "Guarani Paraguaio",
  RUB: "Rublo Russo",
  SAR: "Riyal Saudita",
  SEK: "Coroa Sueca",
  SGD: "Dólar de Cingapura",
  THB: "Baht Tailandês",
  TRY: "Nova Lira Turca",
  TWD: "Dólar Taiuanês",
  USD: "Dólar Americano",
  UYU: "Peso Uruguaio",
  ZAR: "Rand Sul-Africano",
} as const;

export const availableCurrenciesSet = new Set(availableCurrencies);
