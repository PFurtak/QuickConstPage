const countdown = document.querySelector('.countdown');

// Set Launch Date
const launchDate = new Date('May 30, 2020 13:00:00').getTime();

//Update time per second
const intvl = setInterval(() => {
    //get todays date and time in ms
    const now = new Date().getTime();
    
    //distance from now to launch
    const distance = launchDate - now;
    
    // time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000); 

    //display result
    countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
    `;
// if launch date passed
if(distance < 0) {
    clearInterval(intvl);
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launched!';
}

}, 1000);