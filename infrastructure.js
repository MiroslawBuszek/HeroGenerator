const fs = require('fs');

function readNames(nameList) {
  const content = fs.readFileSync('./content/' + nameList, 'utf8');
  const nameFrequencies = content.split('\r\n');
  const records = nameFrequencies.map(nf => nf.split(' - '));
  return records;
}

function readWordSource() {
  const content = fs.readFileSync('./content/article.txt', 'utf8');
  return content
    .split(/\s/)
    .filter(w => w != false)
    .filter(w => w.length > 4);
}
module.exports.readNames = readNames;
module.exports.readWordSource = readWordSource;
 