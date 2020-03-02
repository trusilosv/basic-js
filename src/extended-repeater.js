module.exports = function repeater(str, options) {
    let repeatTimes = options.repeatTimes || 1;
    let separator = options.separator || '+';
    let addition = options.addition;
    let additionRepeatTimes = options.additionRepeatTimes || 0;
    let additionSeparator = options.additionSeparator || '|';
    if (addition != undefined && additionRepeatTimes === 0) additionRepeatTimes = 1;
    let temp = (addition + additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
    temp = (str + temp + separator).repeat(repeatTimes).slice(0, -separator.length);

    return temp;
};