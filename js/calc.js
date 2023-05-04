var bar = document.getElementById('bar');
var input = document.getElementById('input_p');
var button_7 = document.getElementById('button_7');
var button_8 = document.getElementById('button_8');
var button_9 = document.getElementById('button_9');
var plus = document.getElementById('button_+');
var button_4 = document.getElementById('button_4');
var button_5 = document.getElementById('button_5');
var button_6 = document.getElementById('button_6');
var minus = document.getElementById('button_-');
var button_1 = document.getElementById('button_1');
var button_2 = document.getElementById('button_2');
var button_3 = document.getElementById('button_3');
var del = document.getElementById('button_/');
var zap = document.getElementById('button_,');
var button_0 = document.getElementById('button_0');
var ravno = document.getElementById('button_=');
var umn = document.getElementById('button_*');

var x = 0; //счетчик сброса строки
var m = 0; //4 счетчика для равно
var u = 0;
var d = 0;
var p = 0;
var y = 0; //счетчик минуса перед цифрой


bar.onclick = function() {
    y = 0;
    input.innerHTML = '';
};

button_1.onclick = function() {
    y++;
    if (x>0) {
        input.innerHTML = '';
        x=0;
    }
    input.innerHTML += '1';
};

button_2.onclick = function() {
    y++;
    if (x>0) {
        input.innerHTML = '';
        x=0;
    }
    input.innerHTML += '2';
};

button_3.onclick = function() {
    y++;
    if (x>0) {
        input.innerHTML = '';
        x=0;
    }
    input.innerHTML += '3';
};

button_4.onclick = function() {
    y++;
    if (x>0) {
        input.innerHTML = '';
        x=0;
    }
    input.innerHTML += '4';
};

button_5.onclick = function() {
    y++;
    if (x>0) {
        input.innerHTML = '';
        x=0;
    }
    input.innerHTML += '5';
};

button_6.onclick = function() {
    y++;
    if (x>0) {
        input.innerHTML = '';
        x=0;
    }
    input.innerHTML += '6';
};

button_7.onclick = function() {
    y++;
    if (x>0) {
        input.innerHTML = '';
        x=0;
    }
    input.innerHTML += '7';
};

button_8.onclick = function() {
    y++;
    if (x>0) {
        input.innerHTML = '';
        x=0;
    }
    input.innerHTML += '8';
};

button_9.onclick = function() {
    y++;
    if (x>0) {
        input.innerHTML = '';
        x=0;
    }
    input.innerHTML += '9';
};

button_0.onclick = function() {
    y++;
    if (x>0) {
        input.innerHTML = '';
        x=0;
    }
    input.innerHTML += '0';
};

plus.onclick = function() {
    input1 = document.getElementsByClassName('input_p');
    val1 = parseFloat(input1[0].textContent);
    input.innerHTML = '+';
    x++;
    p++;
};

minus.onclick = function() {
    if (y<1) {
        input.innerHTML += '-';
        y++;
    }
    else {
    input1 = document.getElementsByClassName('input_p');
    val1 = parseFloat(input1[0].textContent);
    input.innerHTML = '-';
    x++;
    m++;
    }
};

umn.onclick = function() {
    input1 = document.getElementsByClassName('input_p');
    val1 = parseFloat(input1[0].textContent);
    input.innerHTML = '*';
    x++;
    u++;
};

del.onclick = function() {
    input1 = document.getElementsByClassName('input_p');
    val1 = parseFloat(input1[0].textContent);
    input.innerHTML = '/';
    x++;
    d++;
};

zap.onclick = function() {
    input.innerHTML += '.';
};

ravno.onclick = function() {
    if (m>0) {
        input1 = document.getElementsByClassName('input_p');
        val2 = parseFloat(input1[0].textContent);
        val3 = val1 - val2;
        input.innerHTML = val3;
        m=0;
    }
    if (p>0) {
        input1 = document.getElementsByClassName('input_p');
        val2 = parseFloat(input1[0].textContent);
        val3 = val1 + val2;
        input.innerHTML = val3;
        p=0;
    }
    if (u>0) {
        input1 = document.getElementsByClassName('input_p');
        val2 = parseFloat(input1[0].textContent);
        val3 = val1 * val2;
        input.innerHTML = val3;
        u=0;
    }
    if (d>0) {
        input1 = document.getElementsByClassName('input_p');
        val2 = parseFloat(input1[0].textContent);
        val3 = val1 / val2;
        input.innerHTML = val3;
        d=0;
    }
};











































































































