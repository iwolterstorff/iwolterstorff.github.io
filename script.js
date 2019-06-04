let time = document.getElementById('time');


setInterval(() => {
  let theTime = moment.tz("2017-11-04 23:00", "America/New_York");
  let now = moment();
  let years = now.diff(theTime, 'year');
  theTime.add(years, 'years');
  let months = now.diff(theTime, 'months');
  theTime.add(months, 'months');
  let days = now.diff(theTime, 'days');
  theTime.add(days, 'days');
  let hours = now.diff(theTime, 'hours');
  theTime.add(hours, 'hours');
  let minutes = now.diff(theTime, 'minutes');
  theTime.add(minutes, 'minutes');
  let seconds = now.diff(theTime, 'seconds');

  time.innerHTML = `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}, 1000);