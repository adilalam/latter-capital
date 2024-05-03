const { describe, expect, test } = require('@jest/globals');
const { firstCapital, eachCapital, toCapital, toLower } = require('../index');

describe('Letter Capital', () => {
    test('Capital', () => {
        expect(toCapital("md adil alam")).toMatch("MD ADIL ALAM");
    });

    test('Capital', () => {
        expect(toCapital()).toEqual("Please pass string to do Capital.");
    });

    test('Lower', () => {
        expect(toLower("MD ADIL ALAM")).toMatch("md adil alam");
    });

    test('Lower', () => {
        expect(toLower()).toEqual("Please pass string to do Lower.");
    });
    
    test('First letter capital', () => {
        expect(firstCapital("md adil alam")).toMatch("Md adil alam");
    });

    test('Each letter capital', () => {
        expect(eachCapital("md adil alam")).toMatch("Md Adil Alam");
    });
});
