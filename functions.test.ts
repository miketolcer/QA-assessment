const {shuffleArray} = require('./utils')

const {bots} = require('./data')

describe('shuffleArray should return array', () => {
    test('should be array', () => {
        expect(Array.isArray(['value'])).toBe(true)
    })
    })
    // describe("shuffleArray tests", () => {
    // test("shuffleArray should return an array with length of 2", () => {
    //     let result = shuffleArray(bots.length);
    //     expect(result).toHaveLength(2);
    // })
// })