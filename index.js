function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function capitalizEachLetter(string) {
    return string.trim().split(' ').map((str) => capitalizeFirstLetter(str)).join(' ');
}

function firstName(string) {
    return string.trim().split(' ')[0];
}

function secondName(string) {
    return string.trim().split(' ')[1];
}

function lastName(string) {
    return string.trim().split(' ')[2];
}

function firstNameCapital(string) {
    return capitalizeFirstLetter(string.trim().split(' ')[0]);
}

function secondNameCapital(string) {
    return capitalizeFirstLetter(string.trim().split(' ')[1]);
}

function lastNameCapital(string) {
    return capitalizeFirstLetter(string.trim().split(' ')[2]);
}

function toCapital(string) {
    if(!string) {
        return "Please pass string to do Capital."
    }
    return string.toUpperCase()
}

function toLower(string) {
    if(!string) {
        return "Please pass string to do Lower."
    }
    return string.toLowerCase()
}

module.exports = {
    firstCapital: capitalizeFirstLetter,
    eachCapital: capitalizEachLetter,
    toCapital: toCapital,
    toLower: toLower,
    fName: firstName,
    sName: secondName,
    lName: lastName,
    fNCapital: firstNameCapital,
    sNCapital: secondNameCapital,
    lNCapital: lastNameCapital
}