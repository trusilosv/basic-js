module.exports = function getSeason(date) {
    if (date === undefined) return "Unable to determine the time of year!";
    if (isNaN(date)) throw new Error();

    let month = date.getMonth() + 1;

    if (month == 1 || month == 2 || month == 12) return "winter";
    else
    if (month >= 3 && month <= 5) return "spring";
    else
    if (month >= 6 && month <= 8) return "summer";
    else
    if (month >= 9 && month <= 11) return /autumn|fall/;





}