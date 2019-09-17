const { randomizeNameList, randomizeName } = require('./logic');
const { readNames } = require('./infrastructure');

function main() {
  const nameList = randomizeNameList();
  const names = readNames(nameList);

  const selectedName = randomizeName(names);
  //   const words = readWordSource();
  //   const selectedSurname = randomizeWord(words);
  //   const fullName = createFullName(selectedName, selectedSurname);
  //   displayFullName(fullName);
}

main();
