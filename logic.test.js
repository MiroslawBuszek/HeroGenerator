const {calculateMaxPool} = require('./logic')

describe('calculateMaxPool works properly', () => {
    test("for [[ 'Adam', '100'],['Ania', '20']] gets intensity 120", () => {
        
        //Given
        const nameIntensities = [[ 'Adam', '100'],['Ania', '20']]

        //When
        const actual = calculateMaxPool(nameIntensities)

        expect(actual).toBe(120)

    })
}); 