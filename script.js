const EndDate = new Date("08 Sep, 2024 20:22:00").getTime();
const startDate = new Date().getTime();

const daysEle = document.getElementById("days");
const hrsEle = document.getElementById("hrs");
const minsEle = document.getElementById("min");
const secsEle = document.getElementById("sec");

const progressBar = document.getElementById("Progress-bar");

// console.log(startDate);
// console.log(EndDate);

function updateTimer(){
    const now = new Date().getTime();
    // console.log("now = " , now);

    const distCover = now - startDate;
    const distpending = EndDate - now;
    
    // calc days , min ,hrs , sec
    const days = Math.floor( distpending / (24*60*60*1000));
    // console.log("days = " , days);
    daysEle.innerHTML = days;

    const hrs = Math.floor( distpending % (24*60*60*1000) / (60*60*1000));
    // console.log("hrs = " , hrs);
    hrsEle.innerHTML = hrs;

    const mins = Math.floor( distpending % (60*60*1000) / (60*1000));
    // console.log("mins = " , mins);
    minsEle.innerHTML = mins;

    const secs = Math.floor( distpending % (60*1000) / (1000));
    // console.log("secs = " , secs);
    secsEle.innerHTML = secs;

    // calc width percentage

    if( distpending < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        progressBar.style.width = 100 + "%";
    }
    
    const totaldist = EndDate - startDate;

    const percentageDist = Math.floor(distCover*100 / totaldist );
    console.log("perc = ",percentageDist);

    progressBar.style.width = percentageDist + "%";

}

let x = setInterval(updateTimer, 1000);