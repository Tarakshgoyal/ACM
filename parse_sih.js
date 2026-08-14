// Script to parse SIH Excel files and output JSON
const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

// Parse SIH 2024
const wb2024 = XLSX.readFile(path.join(__dirname, 'SIH_PS_2024.xlsx'));
const sheetNames = wb2024.SheetNames;
console.log('Sheet names:', sheetNames);

// Parse first sheet
const sheet = wb2024.Sheets[sheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet);
console.log('Total rows:', data.length);
console.log('Sample row keys:', Object.keys(data[0] || {}));
console.log('\nFirst 3 rows:');
console.log(JSON.stringify(data.slice(0, 3), null, 2));
console.log('\nLast 2 rows:');
console.log(JSON.stringify(data.slice(-2), null, 2));

// Write full data to JSON file
fs.writeFileSync(
  path.join(__dirname, 'sih_2024_data.json'),
  JSON.stringify(data, null, 2)
);
console.log('\nFull data written to sih_2024_data.json');
