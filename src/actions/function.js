import { useEffect } from 'react';

export const stringToNumber = (stringNumber) => {
  let hargaString = stringNumber.split('');
  const filteredHargaString = hargaString.filter((harga) => harga !== '.');
  const hargaAkhir = Number(filteredHargaString.join(''));
  return hargaAkhir;
};

export const hariIni = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate() - 4;

  return mm + '-' + dd + '-' + yyyy;
};

export const filterSeaCounrty = (data, nameCountry) => {
  return data.filter((d) => d.countryRegion === nameCountry);
};
