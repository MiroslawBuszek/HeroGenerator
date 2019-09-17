const fs = require('fs');

function readNames(nameList) {
  const content = fs.readFileSync('./content/' + nameList, 'utf8');
  const nameFrequencies = content.split('\r\n');
  const records = nameFrequencies.map(nf => nf.split(' - '))
  return records;
}

module.exports.readNames = readNames;
