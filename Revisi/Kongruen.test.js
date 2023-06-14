const Kongruen = require('./Kongruen');

test("Direct Proof - 3, 24, 7", () => {
    expect(Kongruen(3, 24, 7)).toBe(true);
});

test("Direct Proof - -31, 11, 7", () => {
    expect(Kongruen( -31, 11, 7)).toBe(true);
});

test("Direct Proof - -15, -64, 7", () => {
    expect(Kongruen(-15, -64, 7)).toBe(true);
});

test("Direct Proof - 13, -1, 7", () => {
    expect(Kongruen(13, -1, 7)).toBe(true);
});

test("Direct Proof - 23, 3, 7", () => {
    expect(Kongruen(23, 3, 7)).toBe(false);
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


