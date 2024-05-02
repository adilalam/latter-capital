const { describe, expect, test } = require('@jest/globals');
const { fName, sName, lName } = require('../index');

describe('Slice Name', () => {
    test('Take First name', () => {
        expect(fName("md adil alam")).toMatch("md");
    })

    test('Take Second name', () => {
        expect(sName("md adil alam")).toMatch("adil");
    })

    test('Take Last name', () => {
        expect(lName("md adil alam")).toMatch("alam");
    })
})
