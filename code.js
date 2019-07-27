// For localTimer.
// This ~setInterval~ for repeat The function myTimer every 1 second. 
// ~new Date()~ This function return present year + month + day + time.
// ~toLocaleTimeString()~ This  Return the time portion of a Date object.
setInterval ( myTimer , 1000 ); 
function myTimer() {
  var date_now = new Date();
  var time_now = date_now.toLocaleTimeString();
  document.getElementById("localclock").innerHTML = time_now;
}

// change back ground Almost every second 
setInterval ( setColor , 900 );
function setColor() {
  var ground = document.body;
  ground.style.backgroundColor = ground.style.backgroundColor == "lightgreen" ? "SALMON" : "lightgreen";
}

// cth:counter hour.
// ctm:counter minute.
// cts:counter second.

var cth=0;
var   ctm=0;
var   cts=0;
var   start=0;
//var timer_is_on = 0;

var date = new Date();
var ret_m=0;
var ret_h=0;

    var control;
function down(){
    
if(start===0&&document.getElementById("minute")&&document.getElementById("second")&&document.getElementById("hour")){

cth=parseInt(document.getElementById("hour").value);

ctm=parseInt(document.getElementById("minute").value);
cts=parseInt(document.getElementById("second").value);
if(isNaN(cth)) cth=0;
if(isNaN(ctm)) ctm=0;
if(isNaN(cts)) cts=0;
document.getElementById("hour").value=cth;
document.getElementById("minute").value=ctm;
document.getElementById("second").value=cts;
start=1;
}
if(cth===0 && ctm===0 && cts===0) {
    start = 0;
    return false;
}else{

if(cth>12)
cth=12;
document.getElementById("hour").value=cth;


if(ctm>60)
ctm=60;
document.getElementById("minute").value=ctm;

if(cts>60)
cts=60;
document.getElementById("second").value=cts;
// yasmiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiin
if(cts<10)
    cts="0"+cts;
    document.getElementById("second").value=cts;
    




    cts--;
    if(cts<0){
        if(ctm>0){
            cts=59;
            ctm--; 
            }


            if(ctm<=0&&cth>0){
                cts=59;
                ctm=59;

                cth--; 
                }

                if(ctm>0&&cth>0){
                    cts=59;
                    //ctm--;
                   // cth--; 
                    }





            // else{
            //     cth=0;
            //     cts=0;
            //     ctm=0;
              
            // }





        }





    
    
    }
    
    document.getElementById('hour').innerHTML = cth;

document.getElementById('minute').innerHTML = ctm;
  document.getElementById('second').innerHTML = cts;
  
  
  ret_h=date.getHours()+cth;
  ret_m=date.getMinutes()+ctm+1;
if(ret_m>60)
{
ret_m=ret_m-60;
ret_h+=1;
}
if(ret_h>24)
{ret_h=(ret_h)-24}

if(ret_h>12)
{ret_h=(ret_h)-12}

document.getElementById('return_h').innerHTML = ret_h;
  document.getElementById('return_m').innerHTML = ret_m;
  



   control= setTimeout('down()', 1000);

/////////////////////
}

// This function call when click on START bottun.
// This function call function down().
// The bottun START become disabled ,and bottun STOP become enable.
// The input becom disabled for not change the value through start timer.
function startTimer(){
   down();
   document.getElementById('btn1').setAttribute('disabled', 'disabled');
   document.getElementById('btn2').disabled = false;
   document.getElementById('second').disabled = true;
   document.getElementById('minute').disabled = true;
   document.getElementById('hour').disabled = true;}

// This function call when click on STOP bottun.
// ~clearTimeout~this function Prevent the function set with the setTimeout().
// The bottun START become enable ,and bottun STOP become disabled.
function stopTimer(){
   clearTimeout(control);
   document.getElementById('btn2').setAttribute('disabled', 'disabled');
   document.getElementById('btn1').disabled = false;}

// This function call when click on RESET bottun.
function Reset(){
    document.getElementById('return_h').innerHTML = 00;
    document.getElementById('return_m').innerHTML = 00;
    document.getElementById('hour').value = "00";
    document.getElementById('minute').value = "00";
    document.getElementById('second').value = "00";
    document.getElementById('btn1').disabled= false;
    document.getElementById('btn2').disabled= true;
    document.getElementById('second').disabled= false;
    document.getElementById('minute').disabled= false;
    document.getElementById('hour').disabled= false;
   
    cth=0;
    ctm=0;
    cts=0;
    start=0;
   // var timer_is_on = 0;

    //var control;
   ret_h=0;
   ret_m=0;
  }


var sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/clocks/clock_chime.wav");
function play(){

  var breakh =parseInt( document.getElementById("alarm-h").value);
  var breakm =parseInt( document.getElementById("br-m").value);

  var alarmTime = (breakh) + ":" + (breakm);
  console.log('alarmTime:' + alarmTime);

  var h2 = document.getElementById('clock');

setInterval(function(){

	var date = new Date();
	
	var hours = (12 - (date.getHours()));
	// var hours = date.getHours();
	
	var minutes = date.getMinutes();
	
	var seconds = date.getSeconds();
	


	//convert military time to standard time

	if (hours < 0) {
		hours = hours * -1;
	} else if (hours == 00) {
		hours = 12;
	} else {
		hours = hours;
	}
	
	var currentTime = h2.textContent =hours + ":" + minutes;
	

	if (alarmTime == currentTime) {
        ///alert("Hello! I am an alert box!!");
       // console.log("Hello! I am an alert box!!");
        sound.play()

		}

},1000);







    
}
//}
        


   



