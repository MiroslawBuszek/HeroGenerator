function randomizeNameList() {
  const select = Math.floor(Math.random() * 2 + 1);
  if (select == 1) {
    return 'names-male.txt';
  } else {
    return 'names-female.txt';
  }
}

function randomizeName(nameIntensities) {
  const maxPool = calculateMaxPool(nameIntensities);
  const selectedNumber = Math.floor(Math.random() * maxPool + 1);
  const selectedName = selectName(nameIntensities, selectedNumber);
  return selectedName;
}

function calculateMaxPool(nameIntensities) {
  return nameIntensities
    .filter(ni => ni != false)
    .reduce((acc, ni) => acc + Number(ni[1]), 0);
}

function selectName(nameIntensities, selectedNumber) {
  let acc = 0;
  for (const ni of nameIntensities) {
    acc = acc + Number(ni[1]);
    if (selectedNumber <= acc) {
      return ni[0];
    }
  }
  throw new Error(
    'SelectedNumber exceeded maximum possible value generated by the pool'
  );
}

function randomizeWord(words) {
  const pool = words.length;
  const selectedNumber = Math.floor(Math.random() * pool + 1);
  return word = words[selectedNumber].toUpperCase();
}

module.exports.randomizeNameList = randomizeNameList;
module.exports.randomizeName = randomizeName;
module.exports.randomizeWord = randomizeWord;
module.exports.calculateMaxPool = calculateMaxPool;
module.exports.selectName = selectName;
