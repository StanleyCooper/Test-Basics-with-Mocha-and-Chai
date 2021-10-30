const expect = require("chai").expect;
const averageScore = require("../src/main");

describe("averageScore", () => {
    // Check if the correct value is returned
    it("should return the average score among all students", () => {
        const input = [
            { name: "Shane Carey", score: 9.5 },
            { name: "Rebecca Mills", score: 8.7},
            { name: "Catarine Lima", score: 9.7},
        ];
        const expected = 9.3;
        const actual = averageScore(input);
        expect(actual).to.equal(expected);
    });

    // Check to return null if no input is given
    it("should return null if no input array is given", () => {
        const input = [];
        const expected = null;
        const actual = averageScore();
        expect(actual).to.equal(expected);
    });
});