
const eclidean = require('./euclidian');

test("Direct Proof - 312 and 70", () => {
    expect(eclidean(312, 70)).toBe(2);
});