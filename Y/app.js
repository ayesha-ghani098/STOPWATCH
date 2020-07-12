var min = 0;
var sec = 0;
var milisec = 0;
var m = 0;
var s = 0;
var ms = 0;
var interval;
var interval2;
var minbox = document.getElementById('min');
var secbox = document.getElementById('sec');
var milisecbox = document.getElementById('msec');
var mminbox = document.getElementById('minn');
var ssecbox = document.getElementById('secc');
var mmilisecbox = document.getElementById('msecc');




// -------------------//
// --Stopwatch FUNCTION-- //
// -------------------//
function stopwatch() {
    milisec++;
    milisecbox.innerHTML = milisec;
    if (milisec >= 100) {
        sec++;
        secbox.innerHTML = sec;
        milisec = 0;

        if (sec == 60) {
            min++;
            minbox.innerHTML = min;
            sec = 0;
        }
    }

}
// -------------------//
// --Start FUNCTION-- //
// -------------------//
function Start() {
    document.getElementById('start').disabled = true;
    interval = setInterval(stopwatch, 10);


}
// -------------------//
// --Stop FUNCTION-- //
// -------------------//
function Stop() {
    document.getElementById('start').disabled = false;
    clearInterval(interval);
}
// -------------------//
// --Reset FUNCTION-- //
// -------------------//
function Reset() {

    min = 0;
    sec = 0
    milisec = 0;
    minbox.innerHTML = min;
    secbox.innerHTML = sec;
    milisecbox.innerHTML = milisec;
    stop();
    document.getElementById('start').disabled = false;
}

// -------------------//
// --Timer FUNCTION-- //
// -------------------//
function setint(a, b, c, a1, b2, c3) {
    document.getElementById('set').disabled = true;
    var i = parseInt(a);
    var j = parseInt(b);
    var k = parseInt(c);
    var ii = i * 60 * 1000;
    var jj = j * 1000;
    var exp = ii + jj + k;

    var x = parseInt(a1);
    var y = parseInt(b2);
    var z = parseInt(c3);

    var xx = x * 60 * 1000;
    var yy = y * 1000;
    var exp2 = xx + yy + z + exp;
    setTimeout(delay, exp);
    setTimeout(End, exp2);


}


function delay() {
    interval2 = setInterval(timer, 10);

}



function timer() {
    ms++;
    mmilisecbox.innerHTML = ms;
    if (ms >= 100) {
        s++;
        ssecbox.innerHTML = s;
        ms = 0;

        if (s == 60) {
            m++;
            mminbox.innerHTML = m;
            s = 0;
        }
    }
}

function End() {
    clearInterval(interval2);
    document.getElementById('set').disabled = false;
}

function Refresh() {

    m = 0;
    s = 0
    ms = 0;
    mminbox.innerHTML = m;
    ssecbox.innerHTML = s;
    mmilisecbox.innerHTML = ms;
    End();

}