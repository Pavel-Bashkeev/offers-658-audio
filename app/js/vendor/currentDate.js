window.addEventListener('DOMContentLoaded', () => {
  const day = document.querySelectorAll('.date-day');
  const mont = document.querySelectorAll('.date-mont');
  const year = document.querySelectorAll('.date-year');


  for ( let i = 0; i < day.length; i++){
    currentDate(day[i], mont[i], year[i]);
  }


  function currentDate(day,mont, year){
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();

    console.log(new Date());

    day.textContent = currentDay < 10 ? "0" + currentDay: currentDay;
    mont.textContent = currentMonth < 10 ? "0" + currentMonth: currentMonth;
    year.textContent = currentYear < 10 ? "0" + currentYear: currentYear;
  }
})