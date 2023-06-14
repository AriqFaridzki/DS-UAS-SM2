const Kongruen = require('./Kongruen');




test("Simetrive - 7,12,5", () => {
    expect(cek_kongruen(7,12,5)).toBe(true);
});

test("Simetrive - 12,7,5", () => {
    expect(cek_kongruen(12,7,5)).toBe(true);
});

test("Transitive - 12,17,5", () => {
    expect(cek_kongruen(12,17,5)).toBe(true);
});

test("Reflexive - 12,12,5", () => {
    expect(cek_kongruen(12,12,3)).toBe(true);
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


