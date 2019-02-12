let count = 0;
let timerId;
export const startTimer = () => {
  document.querySelector('#timer').style.visibility = 'visible';
  timerId = setInterval(() => tick(++count), 1000);
}

export const getTimerScore = () => {
  stopTimer();
  return Math.ceil(100000 * Math.pow(0.95, count));
}

export const stopTimer = () => {
  clearInterval(timerId);
}

const tick = count => {
  let time = parseTime(count);
  document.querySelector('#timer').innerHTML = time;
}

const parseTime = count => {
  let minutes = Math.floor(count / 60);
  let seconds = count % 60;

  let leadingMinuteZero, leadingSecondZero;
  leadingMinuteZero = minutes < 10 ? 0 : '';
  leadingSecondZero = seconds < 10 ? 0 : '';
  return `${leadingMinuteZero}${minutes}:${leadingSecondZero}${seconds}`;
}