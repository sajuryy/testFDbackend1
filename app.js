const program = require('commander');
const getServersQty = require('./getServerQty');

program.on('--help', () => {
  console.log('please type separeted by space:');
  console.log('time, allotted for conversion into all formats');
  console.log('time needed to convert in one format');
  console.log('probability to get error while converting in one format (%)');
  console.log('formats quantity');

  console.log('all numbers must be positive integers');
});

program.parse(process.argv);



const T = process.argv[2];
const t = process.argv[3];
const x = process.argv[4];
const n = process.argv[5];

console.log(`u need ${getServersQty(T, t, x, n)} servers`);

