function timeConversion(time) {
  const format = time.substring(time.length - 2);
  time = time.substring(0, 8);

  const timeArr = time.split(":");
  
  let hours = parseInt(timeArr[0]);
  let minutes = timeArr[1];
  let seconds = timeArr[2];

  if (format == "AM") {
    // 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock
    if (hours == 12) {
      hours = 0;
    }
  } else if (hours < 12) {
    hours += 12;
  }

  hours = hours.toString().padStart(2, "0");
  const result = `${hours}:${minutes}:${seconds}`;

  return result;
}

test("timeConversion1", function () {
  expect(timeConversion("12:00:00AM")).toBe("00:00:00");
});

test("timeConversation2", function () {
  expect(timeConversion("12:00:00PM")).toBe("12:00:00");
});

test("timeConversation2", function () {
  expect(timeConversion("07:05:45PM")).toBe("19:05:45");
});
