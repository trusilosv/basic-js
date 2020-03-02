module.exports = function calculateHanoi(disksumber, turnsSpeed) {
    let turns = Math.pow(2, disksumber) - 1;
    let seconds = turns / (turnsSpeed / 3600);
    return { turns: turns, seconds: seconds };

}