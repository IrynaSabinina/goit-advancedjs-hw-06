/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var WeeksDay;
(function (WeeksDay) {
    WeeksDay["Monday"] = "true";
    WeeksDay["Tuesday"] = "true";
    WeeksDay["Wednesday"] = "true";
    WeeksDay["Thursday"] = "true";
    WeeksDay["Friday"] = "true";
    WeeksDay["Saturday"] = "false";
    WeeksDay["Sunday"] = "false";
})(WeeksDay || (WeeksDay = {}));
// type CallbackType = (day:string) => boolean;
function checkDay(day) {
    if (WeeksDay[day] === "true") {
        return true;
    }
    else {
        return false;
    }
}
checkDay("Sunday");
//# sourceMappingURL=7.js.map