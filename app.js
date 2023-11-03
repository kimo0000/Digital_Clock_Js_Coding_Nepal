const body = document.querySelector('body');
const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minute');
const secondes = document.querySelector('.seconde');
const toggleMode = document.querySelector('.toggle_mode');

if(localStorage.getItem('mode') === "Dark Mode") {
    body.classList.add('dark');
    toggleMode.innerText = 'Light Mode';
}

const updateTime = () => {
  let date = new Date();
  let secToDeg = (date.getSeconds() / 60) * 360;
  let minToDeg = (date.getMinutes() / 60) * 360;
  let hourToDeg = (date.getHours() / 12) * 360;
  secondes.style.transform = `rotate(${secToDeg}deg)`;
  minutes.style.transform = `rotate(${minToDeg}deg)`;
  hours.style.transform = `rotate(${hourToDeg}deg)`;
};

updateTime();

setInterval(updateTime, 1000);

toggleMode.addEventListener('click', () => {
    body.classList.toggle("dark");
    let isDark = body.classList.contains("dark") ? true : false;
    console.log(isDark);
    toggleMode.innerText = isDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('mode', isDark ? 'Dark Mode' : 'light Mode');
})