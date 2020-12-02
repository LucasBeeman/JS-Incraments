var secondsPerMinute = 60;
var minutesPerHour = 60;
var hoursPerDay = 24;
var daysPerYear = 365;

var secondsPerHour = secondsPerMinute * minutesPerHour;
document.write(`The number of seconds in a day is ${secondsPerHour} seconds <br>`);

var secondsPerDay = secondsPerHour * hoursPerDay;
document.write(`The number of seconds in a day is ${secondsPerDay} seconds <br>`);

var secondsPerYear = secondsPerDay * daysPerYear;
document.write(`The number of seconds in a year is ${secondsPerYear} seconds <br>`);