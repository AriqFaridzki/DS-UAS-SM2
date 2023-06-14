const euclidean = require('./Euclidean');

test("Direct Proof - Euclidean - 312 dan 70", () => {
    expect(euclidean(312, 70)).toBe(2);
});

test("Direct Proof - Euclidean - 80, 12", () => {
    expect(euclidean(80, 12)).toBe(4);
});

test("Direct Proof - Euclidean - 60, 18", () => {
    expect(euclidean(60, 18)).toBe(6);
});

test("Direct Proof - Euclidean - 45, 6", () => {
    expect(euclidean(45, 6)).toBe(3);
});

test("Direct Proof - Euclidean - 106, 12", () => {
    expect(euclidean(106, 12)).toBe(2);
});