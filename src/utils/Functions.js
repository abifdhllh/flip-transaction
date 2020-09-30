export const upperCaseString = (string = '') => string.toUpperCase();

export const lowerCaseString = (string = '') => string.toLowerCase();

export const capitalizeString = (string = '') =>
  string ? string.charAt(0).toUpperCase() + string.slice(1) : '';

export const thousandSeparator = (number = 0) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const formatRupiah = (number = 0) => `Rp${thousandSeparator(number)}`;

export const monthListIndonesia = {
  '01': 'Januari',
  '02': 'Februari',
  '03': 'Maret',
  '04': 'April',
  '05': 'Mei',
  '06': 'Juni',
  '07': 'Juli',
  '08': 'Agustus',
  '09': 'September',
  '10': 'Oktober',
  '11': 'November',
  '12': 'Desember',
}

export const formatDateIndonesia = (string = '2020-01-01') => {
  const year = string.slice(0, 4);
  const month = string.slice(5, 7);
  const date = string.slice(8, 10);

  const convertedDate = Number(date);
  const convertedMonth = monthListIndonesia[month];

  return `${convertedDate} ${convertedMonth} ${year}`;
}
