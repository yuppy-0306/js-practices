function displayCalendar(year, month) {
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);

  console.log(`       ${month}月 ${year}`);
  console.log("日 月 火 水 木 金 土");

  const firstDayOffset = firstDay.getDay();

  process.stdout.write('   '.repeat(firstDayOffset));

  
  for (let date = firstDay; date <= lastDay; date.setDate(date.getDate() + 1)) {
    process.stdout.write(String(date.getDate()).padStart(2, ' ') + ' ');
    if (date.getDay() === 6) { // 土曜日（getDay()は6が土曜日）
      console.log();
    }
  }
  console.log();
}

displayCalendar(year, month);