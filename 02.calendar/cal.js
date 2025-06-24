#!/usr/bin/env node

function displayCalendar(year, month) {
  const monthNames = [
    "", "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);

  console.log(`     ${monthNames[month]} ${year}`);
  console.log("Su Mo Tu We Th Fr Sa");

  const firstDayOffset = firstDay.getDay();

  process.stdout.write("   ".repeat(firstDayOffset));

  for (let date = firstDay; date <= lastDay; date.setDate(date.getDate() + 1)) {
    process.stdout.write(String(date.getDate()).padStart(2, " ") + " ");
    if (date.getDay() === 6) {
      console.log();
    }
  }
  console.log();
}

const args = process.argv.slice(2);
let year = new Date().getFullYear();
let month = new Date().getMonth() + 1;

for (let i = 0; i < args.length; i++) {
  if (args[i] === "-y" && args[i + 1]) {
    const parsedYear = parseInt(args[i + 1], 10);
    if (!isNaN(parsedYear)) {
      year = parsedYear;
    }
    i++;
  } else if (args[i] === "-m" && args[i + 1]) {
    const parsedMonth = parseInt(args[i + 1], 10);
    if (!isNaN(parsedMonth) && parsedMonth >= 1 && parsedMonth <= 12) {
      month = parsedMonth;
    }
    i++;
  }
}

displayCalendar(year, month);
