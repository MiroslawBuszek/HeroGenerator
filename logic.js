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
  const selectNumber = Math.floor(Math.random() * maxPool + 1);
  const selectedName = selectedName(nameIntensities, selectNumber);
  return selectedName;
}

function calculateMaxPool(nameIntensities) {
  return nameIntensities.reduce((acc, ni) => acc + Number(ni[1], 0));
}



module.exports.randomizeNameList = randomizeNameList;
module.exports.randomizeName = randomizeName;
module.exports.calculateMaxPool = calculateMaxPool;
