export const toDateString = (timestamp: number) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const toTimeString = (timestamp: number) => {
  const date = new Date(timestamp);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
};

export const getPreviousWeekdayOrWeekend = (timestamp: number) => {
  const date = new Date(timestamp);
  const day = date.getDay();

  if (day === 0 || day === 6) {
    return getPreviousWeekend(day);
  } else if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5) {
    return getPreviousWeekday(day);
  }

  return timestamp;
};

const getPreviousWeekday = (day: 1 | 2 | 3 | 4 | 5) => {
  const daysAgo = day === 1 ? 3 : 1;
  const previousDate = new Date();
  previousDate.setDate(previousDate.getDate() - daysAgo);

  return previousDate.getTime();
};

const getPreviousWeekend = (day: 0 | 6) => {
  const daysAgo = day === 0 ? 1 : 6;
  const previousDate = new Date();
  previousDate.setDate(previousDate.getDate() - daysAgo);

  return previousDate.getTime();
};
