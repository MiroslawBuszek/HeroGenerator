const { randomizeNameList, randomizeName, randomizeWord } = require('./logic');
const { readNames, readWordSource } = require('./infrastructure');

function main() {
  const nameList = randomizeNameList();
  const names = readNames(nameList);
  const selectedName = randomizeName(names);
  const words = readWordSource();
  const selectedSurname = randomizeWord(words);
  const fullName = selectedName + ' ' + selectedSurname;
  console.log(fullName);
}

main();
