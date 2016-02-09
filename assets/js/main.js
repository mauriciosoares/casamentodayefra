setInterval(countdownWedding, 1000);

function countdownWedding() {
  var c = moment("2016-11-13").countdown();
  document.getElementById('months').innerText = c.months;
  document.getElementById('days').innerText = c.days;
  document.getElementById('hours').innerText = c.hours;
  document.getElementById('minutes').innerText = c.minutes;
  document.getElementById('seconds').innerText = c.seconds;
}

countdownWedding();

$('.slider').slick({
  lazyLoad: 'ondemand',
  dots: true,
  accessibility: false
});
