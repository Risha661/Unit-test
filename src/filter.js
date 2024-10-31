const filter = (arr, key, val) => {
  return arr.filter(item => item[key] === val);
};

let objects = [
  { login: 'Maks', emali: 'maks@maks.com', company: 'METHED' },
  { login: 'Methed', emali: 'info@methed.ru', company: 'METHED' },
  { login: 'Humidor', emali: 'tomato@pomodoro.com', company: 'cucumber' }
];

console.log(filter(objects, 'emali', 'info@methed.ru')); 
console.log(filter(objects, 'company', 'METHED'));

export default filter;