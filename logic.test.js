const { calculateMaxPool, selectName } = require('./logic');

describe('calculateMaxPool works properly', () => {
  test("for [['ala', '100'], ['basia', '20']] gets intensity 120", () => {
    //Given
    const nameIntensities = [['ala', '100'], ['basia', '20']];

    //When
    const actual = calculateMaxPool(nameIntensities);

    expect(actual).toBe(120);
  });
});

describe('selectName works properly', () => {
  test("for [['ala', '100'],['basia', '20'], ['celina', '30']] and for selected 125 it gets celina", () => {
    //Given
    const nameIntensities = [['ala', '100'], ['basia', '20'], ['celina', '30']];
    const selectedNumber = 100;

    //When
    const actual = selectName(nameIntensities, selectedNumber);

    expect(actual).toBe('ala');
  });

  test("for [['ala', '100'],['basia', '20'], ['celina', '30']] and for selected 125 it gets celina", () => {
    //Given
    const nameIntensities = [['ala', '100'], ['basia', '20'], ['celina', '30']];
    const selectedNumber = 125;

    //When
    const actual = selectName(nameIntensities, selectedNumber);

    expect(actual).toBe('celina');
  });

  test("for [['ala', '100'],['basia', '20'], ['celina', '30']] and for selected 101 it gets basia", () => {
    //Given
    const nameIntensities = [['ala', '100'], ['basia', '20'], ['celina', '30']];
    const selectedNumber = 101;

    //When
    const actual = selectName(nameIntensities, selectedNumber);

    expect(actual).toBe('basia');
  });
});
