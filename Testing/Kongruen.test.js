const Kongruen = require('../Revisi/Kongruen');


test("Simetrive - 7,12,5", () => {
    expect(Kongruen(7,12,5)).toEqual(expect.not.stringContaining("bukan"))
});

test("Simetrive - 12,7,5", () => {
    expect(Kongruen(12,7,5)).toEqual(expect.not.stringContaining("bukan"))
});

test("Transitive - 12,17,5", () => {
    expect(Kongruen(12,17,5)).toEqual(expect.not.stringContaining("bukan"))
});

test("Reflexive - 12,12,5", () => {
    expect(Kongruen(12,12,3)).toEqual(expect.not.stringContaining("bukan"))
});

test("Direct Proof - 13, -1, 7", () => {
    expect(Kongruen(13, -1, 7)).toEqual(expect.not.stringContaining("bukan"))
});

test("Direct Proof - 23, 3, 7", () => {
    expect(Kongruen(23, 3, 7)).toEqual(expect.stringContaining("bukan merupakan kelipatan"))
});

test("Test Error - Kongruen - 23, 3, a", () => {
    expect(Kongruen(23, 3, "a")).toBe("Argumen ketiga harus number");
});

test("Test Error - Kongruen - 23, true, a", () => {
    expect(Kongruen(23, true, "a")).toBe("Argumen kedua harus number");
});

test("Test Error - Kongruen - false, 3, a", () => {
    expect(Kongruen(false, 3, "a")).toBe("Argumen pertama harus number");
});


