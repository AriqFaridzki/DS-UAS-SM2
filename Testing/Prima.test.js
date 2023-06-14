const prima = require('../Revisi/Prima');

test("Input Validation | -1", () => {
    expect(prima(-1)).toBe("Argumen harus lebih dari 0");
});

test("Input Validation | 3.14", () => {
    expect(prima(3.14)).toBe("Argumen harus bagian dari Integer");
});

test("Input Validation | Not a Number", () => {
    expect(prima("a")).toEqual(expect.stringContaining(`Argumen harus number bukan`))
});

test("Direct Proof | 19 ", () => {
    expect(prima(19)).toEqual(expect.stringContaining(`Prima, karena tidak bisa dibagi`))
});

test("Direct Proof | 157 ", () => {
    expect(prima(157)).toEqual(expect.stringContaining(`Prima, karena tidak bisa dibagi`))
});

test("Direct Proof | 221 ", () => {
    expect(prima(221)).toEqual(expect.stringContaining(`Bukan Prima, karena bisa dibagi oleh`))
});

test("Direct Proof | 7919 ", () => {
    expect(prima(7919)).toEqual(expect.stringContaining(`Prima, karena tidak bisa dibagi`))
});

test("Direct Proof | 9999 ", () => {
    expect(prima(9999)).toEqual(expect.stringContaining(`Bukan Prima, karena bisa dibagi oleh`))
});
