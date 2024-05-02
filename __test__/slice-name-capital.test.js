const { describe, expect, test } = require('@jest/globals');
const { fNCapital, sNCapital, lNCapital } = require('../index');

describe('Slice Name with capital', () => {
    test('Take First name capital', () => {
        expect(fNCapital("md adil alam")).toMatch("Md");
    })

    test('Take Second name capital', () => {
        expect(sNCapital("md adil alam")).toMatch("Adil");
    })

    test('Take Last name capital', () => {
        expect(lNCapital("md adil alam")).toMatch("Alam");
    })
});
