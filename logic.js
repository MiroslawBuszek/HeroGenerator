function randomizeGender() {
  const select = Math.floor((Math.random() * 2) + 1);
  if (select == 1) {
    return 'male';
  } else {
    return 'female';
  }
}
 
module.exports.randomizeGender = randomizeGender;
