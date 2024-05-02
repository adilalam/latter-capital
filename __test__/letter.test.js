const { describe, expect, test } = require('@jest/globals');
const { firstCapital, eachCapital } = require('../index');

describe('Letter Capital', () => {
    test('First letter capital', () => {
        expect(firstCapital("md adil alam")).toMatch("Md adil alam");
    });

    test('Each letter capital', () => {
        expect(eachCapital("md adil alam")).toMatch("Md Adil Alam");
    });
});
