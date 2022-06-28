export const stringToNumber = (stringNumber) => {
  let hargaString = stringNumber.split('');
  const filteredHargaString = hargaString.filter((harga) => harga !== '.');
  const hargaAkhir = Number(filteredHargaString.join(''));
  return hargaAkhir;
};
export const hariIni = (dayAgo) => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate() - dayAgo;
  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
  if (dd < 0) {
    mm = mm - 1;
    const daysOfMonth = getDaysInMonth(yyyy, mm);
    dd = today.getDate() + daysOfMonth - dayAgo;
  }
  return mm + '-' + dd + '-' + yyyy;
};

export const filterSeaCounrty = (data, nameCountry) => {
  return data.filter((d) => d.countryRegion === nameCountry);
};
