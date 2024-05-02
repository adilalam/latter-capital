function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}


function capitalizEachLetter(string) {
    return string.trim().split(' ').map((str) => capitalizeFirstLetter(str)).join(' ');
}

module.exports = {
    firstCapital: capitalizeFirstLetter,
    eachCapital: capitalizEachLetter
}