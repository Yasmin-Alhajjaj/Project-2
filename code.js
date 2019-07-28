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
/* setInterval ( setColor , 10000 );
function setColor() {
  var ground = document.body;
  ground.style.backgroundColor = ground.style.backgroundColor == "lightgreen" ? "#FBCEB1" : "lightgreen";
} */

// Todo  small list. USED JQUERY.
$(document).ready(function($) {
    $('#note').submit(function() {
        //if input text ,take value input and put in new li.
        if ($('#input').val() !== '') {
            var newTask = $('#input').val();
            var newLi = $('<li>' + newTask + '</li>');
            // If click on text it remove from list
            newLi.on('click', function() {
                $(this).remove();
            });
            //take the input and empty the input
            $('ul').prepend(newLi); 
            $('#input').val('');
            return false; 
        }
        return false;
    });
  });


// cth:counter hour.
// ctm:counter minute.
// cts:counter second.
//~parseInt~ ignore a string and returns an integer.
var date = new Date();
var cth = 0;
var ctm = 0;
var cts = 0;
var start = 0;
var ret_m=0;
var ret_h=0;
var control;
var parameter;

function down(){  
if(start===0&&document.getElementById("minute")&&document.getElementById("second")&&document.getElementById("hour")){

cth=parseInt(document.getElementById("hour").value);
ctm=parseInt(document.getElementById("minute").value);
cts=parseInt(document.getElementById("second").value);
//if input is char , return NaN so this condition make value  equal 0;
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
    document.getElementById('btn1').disabled= false;
    document.getElementById('btn2').disabled= true;
    return false;
}else{
    // this conditions if input false number.    
    if(cth>12)
    cth=12;
    document.getElementById("hour").value=cth;

    if(ctm>60)
    ctm=60;
    document.getElementById("minute").value=ctm;

    if(cts>60)
    cts=60;
    document.getElementById("second").value=cts;

    // CounterDown
    if(cts<10)
        cts="0"+cts;
        document.getElementById("second").value=cts;
        cts--;
        if(cts<0){
            if(ctm>0){
                cts=59;
                ctm--;}
            if(ctm<=0&&cth>0){
                cts=59;
                ctm=59;
                cth--;}
            if(ctm>0&&cth>0){
                cts=59;}
        }
}
document.getElementById('hour').innerHTML = cth;
document.getElementById('minute').innerHTML = ctm;
document.getElementById('second').innerHTML = cts;
 // For Return time after adding timer. 
ret_h=date.getHours()+cth;
ret_m=date.getMinutes()+ctm+1;
if(ret_m>60){
    ret_m=ret_m-60;
    ret_h+=1;}
if(ret_h>24){
    ret_h=(ret_h)-24}
if(ret_h>12){
    ret_h=(ret_h)-12}

document.getElementById('return_h').innerHTML = ret_h;
document.getElementById('return_m').innerHTML = ret_m;
control= setTimeout('down()', 1000);
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
// Return evreything to default.
// Make the values equal to zero
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
    cts=0;}

// For Alarm Time.
// ~new Audio~ for access to the properties of audio elements and control it.
// ~playon()~ This function call When click button play.
var sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/clocks/clock_chime.wav");
function playon(){
    var break_hour =parseInt( document.getElementById("alarm-h").value);
    var break_minut =parseInt( document.getElementById("alarm-m").value);
    // if input char in the first ,make the value equal 0.
    if (isNaN(break_hour)){
         break_hour=0; 
         document.getElementById("alarm-h").value = "00";}

    if(isNaN(break_minut)){
         break_minut=0;     
         document.getElementById("alarm-m").value = "00";}

    // alarmTime present The input time. 
    var alarmTime = (break_hour) + ":" + (break_minut);
    console.log(alarmTime);
      // currentTime present The localtime.
   setInterval(function(){
    var date = new Date();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    if (hours > 12){
          hours = hours -12;}
    var currentTime =hours + ":" + minutes;
       console.log(currentTime)
       // If alarmTime equal currentTime , the sound play & The value of input time make 0, and the sound stop after 1/2 second.
	   if (alarmTime == currentTime) {
        sound.play()
        document.getElementById("alarm-h").value = "00";
        document.getElementById("alarm-m").value = "00";
        setTimeout('sound.pause()', 10000) ;
		}
        
},1000);
}





        


   


