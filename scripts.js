// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.onload = function(){

  let takeOff = document.getElementById('takeoff');
  let land = document.getElementById('landing');
  let abort = document.getElementById('missionAbort');
  let status = document.getElementById('flightStatus');
  let bg = document.getElementById('shuttleBackground');
  let height = document.getElementById('spaceShuttleHeight');
  let up = document.getElementById('up');
  let down = document.getElementById('down');
  let right = document.getElementById('right');
  let left = document.getElementById('left');
  let rocket = document.getElementById('rocket');
  let miles = 0;
  let numy = 0;
  let numx = 0;
  function reset() {
    miles = 0;
    numy = 0;
    numx = 0;
  }

  takeOff.addEventListener('click', function() {
  let ready = confirm('Confirm that the shuttle is ready for take off.')
    if (ready) {
      status.innerHTML = 'Shuttle in flight.';
      bg.style.backgroundColor = 'blue';
      height.innerHTML = 10000;
      rocket.style.transform = 'translate(0px, -10px)';
      reset();
    }
  });

  land.addEventListener('click', function() {
    alert('The shuttle is landing. Landing gear engaged.');
    status.innerHTML = 'The shuttle has landed.';
    bg.style.backgroundColor = 'green';
    rocket.style.transform = 'translate(0px, 0px)';
    reset();
    height.innerHTML = 0;
  });

  abort.addEventListener('click', function() {
    let scrub = confirm('Confirm that you want to abort the mission.');
    if (scrub) {
      status.innerHTML = 'Mission aborted.';
      bg.style.backgroundColor = 'green';
      rocket.style.transform = 'translate(0px, 0px)';
      reset();
      height.innerHTML = 0;
    }
  });

  up.addEventListener('click', function() {
    miles += 10000;
    height.innerHTML = miles;
    numy -= 10;
    rocket.style.transform = "translate("+ numx +"px, " + numy + "px)";
    if (miles === 260000){
      up.disabled = 'true';
    }
    
  });
  down.addEventListener('click', function() {
    miles -= 10000;
    height.innerHTML = miles;
    numy += 10;
    rocket.style.transform = "translate("+ numx +"px, " + numy + "px)";
    if (numy === 0){
      down.disabled = 'true';
    }
  });
  right.addEventListener('click', function() {
    numx += 10;
    rocket.style.transform = "translate(" + numx + "px, "+ numy +"px)";
  });
  left.addEventListener('click', function() {
    numx -= 10;
    rocket.style.transform = "translate(" + numx + "px, "+ numy +"px)";
  });
  
}