var state = {
  breakLength:5,
  sessionLength:10,
  clockTime:0,
  clockTicking:false,
  sessionOnClock:true,
  breakOnClock: false,
  newState:true,
  timer: undefined
};

function minutesToSeconds(minutes) {
  return minutes*60;
}
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



function countdown() {
  $('#main-clock').empty();
  $('#main-clock').append(convert(state.clockTime));
  state.clockTime -= 1;
  if(state.clockTime < 0) {
   //update state here
    if(state.sessionOnClock) {
      state.sessionOnClock = false;
      state.breakOnClock = true;
      state.clockTime = state.breakLength*60;
    } else {
      state.sessionOnClock = true;
      state.breakOnClock = false;
      state.clockTime = state.sessionLength*60;
    }
  }
  timer = setTimeout(function () { countdown()},1000);
}
$('document').ready(function() {
  state.clockTime = state.sessionLength;
  $('#break').append(state.breakLength);
  $('#session').append(state.sessionLength);
  $('#main-clock').append(state.clockTime);
  $('#break-minus').click(function() {
    if(!state.clockTicking) {
      state.breakLength -= 1;
      $('#break').empty();
      $('#break').append(state.breakLength);
    }
    if(!state.clockTicking && state.breakOnClock) {
      state.clockTime = state.breakLength;
      $('#main-clock').empty();
      $('#main-clock').append(state.clockTime);
    }
  });
  $('#break-plus').click(function() {
    if(!state.clockTicking) {
      state.breakLength += 1;
      $('#break').empty();
      $('#break').append(state.breakLength);
    }
    if(!state.clockTicking && state.breakOnClock) {
      state.clockTime = state.breakLength;
      $('#main-clock').empty();
      $('#main-clock').append(state.clockTime);
    }
  });
  $('#session-minus').click(function() {
    if(!state.clockTicking) {
      state.sessionLength -= 1;
      $('#session').empty();
      $('#session').append(state.sessionLength);
    }
    
    if(!state.clockTicking && state.sessionOnClock) {
      state.clockTime = state.sessionLength;
      $('#main-clock').empty();
      $('#main-clock').append(state.clockTime);
    }
    state.newState = true;
  });
  $('#session-plus').click(function() {
    if(!state.clockTicking) {
      state.sessionLength += 1;
      $('#session').empty();
      $('#session').append(state.sessionLength);
    }
    if(!state.clockTicking && state.sessionOnClock) {
      state.clockTime = state.sessionLength;
      $('#main-clock').empty();
      $('#main-clock').append(state.clockTime);
    }
    state.newState = true;
  });
  $('#main-clock').click(function() {
    if((state.clockTime === state.sessionLength) || (state.clockTime === session.breakLength)) {
      state.clockTime *= 60
    }
    
    state.clockTicking = !state.clockTicking;
    if(state.clockTicking) {
      
      countdown();
    } else {
      clearTimeout(timer);
    };
  });
});

