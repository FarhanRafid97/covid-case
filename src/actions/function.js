export const stringToNumber = (stringNumber) => {
  let hargaString = stringNumber.split('');
  const filteredHargaString = hargaString.filter((harga) => harga !== '.');
  const hargaAkhir = Number(filteredHargaString.join(''));
  return hargaAkhir;
};
