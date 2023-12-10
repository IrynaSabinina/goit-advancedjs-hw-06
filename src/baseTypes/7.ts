/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeeksDay {
  Monday="true",
  Tuesday="true",
  Wednesday ="true",
  Thursday= "true",
  Friday ="true",
  Saturday="false",
  Sunday= "false",
}

// type CallbackType = (day:string) => boolean;

function checkDay(day:string):boolean{
if (WeeksDay[day] === "true") {

  return true
} else {
  return false
}
}

checkDay("Sunday")