const { randomizeGender } = require('./logic');
const { readNames } = require('./infrastructure');

function main() {
  const gender = randomizeGender();
  const names = readNames(gender);
  console.log(names);

  //   const selectedName = randomizeName(names);
  //   const words = readWordSource();
  //   const selectedSurname = randomizeWord(words);
  //   const fullName = createFullName(selectedName, selectedSurname);
  //   displayFullName(fullName);
}

main();
