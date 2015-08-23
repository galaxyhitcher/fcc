var count = 30;
var takebreak = 20;

function countdown() {
    console.log(convert(count));
    count -= 1;
    if(count < 0) {
        countdownBreak();
    } else {
        setTimeout(function() { countdown() },1000);
    }

}
function countdownBreak() {
    console.log(convert(takebreak));
    takebreak -= 1;
    if(takebreak < 0) {
        countdown();
    } else {
        setTimeout(function() { countdownBreak() },1000);
    }

}

//countdown();
function pad(num) {
    num = num.toString();
    while(num.length < 2) {
        num = '0' + num;
    }
    return num
}

function convert(seconds) {
    var hours = Math.floor(seconds/3600);
    seconds -= hours*3600;
    var minutes = Math.floor(seconds/60);
    seconds -= minutes*60;
    if(hours > 0) {
        return hours + ':' + pad(minutes) + ':' + pad(seconds);
    } else if(minutes > 0) {
        return minutes + ':' + pad(seconds);
    } else {
        return '0' + ':' + pad(seconds);
    }
    //convert(1000) should return 16:40
    //convert(1000);

    //convert(20) should return 0:20
    //convert(20);

    //convert(3650) should return 1:00:50
    //convert(3650);

}

function timeToSeconds(time) {
    time = time.split(':');
    for(var i = 0; i < time.length; i++) {
        time[i] = parseInt(time[i]);
    }
    if(time.length === 3) {
        return time[0]*3600 + time[1]*60 + time[2];
    } else if(time.length===2) {
        return time[0]*60 + time[1];
    } else {
        return time[0];
    }
    //convert(1000) should return 16:40
    //convert(1000);

    //convert(20) should return 0:20
    //convert(20);

    //convert(3650) should return 1:00:50
    //convert(3650);
}


countdown();
