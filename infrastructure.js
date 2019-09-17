const fs = require('fs');

function readNames(gender) {
  const content = fs.readFileSync('./content/names-male.txt', 'utf8');
  const nameFrequencies = content.split('\r\n');
  const records = nameFrequencies.map(nf => nf.split(' - '))
  return records;
}

module.exports.readNames = readNames;
