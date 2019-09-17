function randomizeNameList() {
  const select = Math.floor((Math.random() * 2) + 1);
  if (select == 1) {
    return 'names-male.txt';
  } else {
    return 'names-female.txt';
  }
} 
 
module.exports.randomizeNameList = randomizeNameList;
