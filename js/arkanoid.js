var upBlock = document.querySelector(".upBlock");
var downBlock = document.querySelector(".downBlock");
var button = document.getElementById("button");
var ball = document.getElementById("ball");
var but = document.getElementById("but");
var scoreSpan = document.getElementById("score");
var info = document.getElementById("info");
var startMessage = document.getElementById("startMessage");
var audio = new Audio();

//точка входа в программу
button.addEventListener("click", prestart);

//Отсчет 3,2,1
var counter = 3;
function prestart() {
    button.remove();
    //Генерация голоса: 0-мужской, 1-женский
    var random = parseInt(Math.random()*2);
    prestartInterval = setInterval(function() {
        if(random == 0) {
            startMessage.innerHTML = counter;
            startMessage.style.color = "red";
            startMessage.style.fontSize = "80px";
            audio.src = "audio/arkanoid/" + counter + "m.ogg";
            audio.play();
            counter--;
            if(counter == -1) {
                startMessage.innerHTML = "GO!!!";
                audio.src = "audio/arkanoid/go_M.ogg";
                audio.play();
                clearInterval(prestartInterval);
                counter = 3;
                setTimeout(start, 500);
            }
        }
        if(random == 1) {
            startMessage.innerHTML = counter;
            startMessage.style.color = "red";
            startMessage.style.fontSize = "80px";
            audio.src = "audio/arkanoid/" + counter + "f.ogg";
            audio.play();
            counter--;
            if(counter == -1) {
                startMessage.innerHTML = "GO!!!";
                audio.src = "audio/arkanoid/go_F.ogg";
                audio.play();
                clearInterval(prestartInterval);
                counter = 3;
                setTimeout(start, 1000);
            }
        }
    }, 1000);
}

//основная функция игры
function start() {
    startMessage.innerHTML = "";
    document.onkeypress = mooveUp;
    document.onkeydown = mooveDown;
    topVar = 378;
    leftVar = 35;
    rightVar = 0;
    counterTop = 0;
    counterRight = 0;
    counterLeft = 0;
    distanceUp = 0;
    distanceDown = 0;
    rate = 1;
    score = 0;
    blockWidth = downBlock.clientWidth + 10;
    ball.style.top = topVar + 'px';
    scoreSpan.innerHTML = 0;
    downBlock.style.left = 0;
    ball.style.left = 35 + 'px';
    //Убираем блок с подсказкой
    info.style.color = "white";
    //Устанавливаем режим скорости
    var optionArr = document.getElementsByClassName("speed");
    for(var i=0; i<optionArr.length; i++) {
        if(optionArr[i].selected == true) rate = parseInt(optionArr[i].value);
    }
    //Проверяем режим игры (1 или 2 игрока) и запускаем игру
    gameMode = document.getElementsByName("count");
    for(var i=0; i<gameMode.length; i++) {
        if(gameMode[i].checked == true) {
            if(i==0) {
                upBlock.style.cssText = "";
                interval = setInterval(oneGamePlayer, 8); 
            }
            else {
                upBlock.style.cssText = "\
                    width: 80px;\
                    height: 10px;\
                    border: 1px solid rgb(105, 89, 89);\
                    position: absolute;\
                    left: 0;\
                    top: -1px;";
                interval = setInterval(twoGamePlayer, 8);
            }
        }
    }
}

//Функции движения 
//нижний блок
var shiftDown = 0;
function mooveDown() {
    if(event.keyCode == 39) {
         if(shiftDown>=0 && shiftDown<520) {
            shiftDown += 20;
            downBlock.style.left = shiftDown + 'px';
        }
    }
    if(event.keyCode == 37) {
        if(shiftDown>0 && shiftDown<=520) {
            shiftDown -= 20;
            downBlock.style.left = shiftDown + 'px';
        }
    }
}

//верхний блок
var shiftUp = 0;
function mooveUp() {
    if(event.code == "KeyD") {
            if(shiftUp>=0 && shiftUp<520) {
                shiftUp += 20;
                upBlock.style.left = shiftUp + 'px';
            }
        }
    if(event.code == "KeyA") {
        if(shiftUp>0 && shiftUp<=520) {
            shiftUp -= 20;
            upBlock.style.left = shiftUp + 'px';
        }
    }
}

//Функция для одного игрока
function oneGamePlayer() {
    distanceDown = parseInt(ball.style.left) - parseInt(downBlock.style.left);
    //движение вверх
    if(counterTop==0) {
        //право-вверх
        if(counterRight == 0) {
            topVar -= 1 * rate;
            leftVar += 1 * rate;
            ball.style.left = leftVar + 'px';
            ball.style.top = topVar + 'px';
            //если -долетел- до правой стенки
            if(leftVar>590) counterRight = 1;
        }
        if(counterRight == 1) {
            //лево-вверх
            if(counterLeft == 0) {
                topVar -= 1 * rate;
                leftVar -= 1 * rate;
                ball.style.left = leftVar + 'px';
                ball.style.top = topVar + 'px';
            }
            //если долетел до левой стенки
            if(leftVar<10) counterLeft = 1;
            //право-вверх от левой стенки
            if(counterLeft == 1) {
                topVar -= 1 * rate;
                leftVar += 1 * rate;
                ball.style.left = leftVar + 'px';
                ball.style.top = topVar + 'px';
                if(leftVar>590) counterLeft = 0;
            }
        }
        // если долетел до верха
        if(topVar<0) {
            counterTop = 1;
        }    
    }   
    //движение вниз
    if(counterTop == 1) {
        //если двигается вниз от левой стенки
        if(counterRight == 0) {
            leftVar += 1 * rate;
            topVar += 1 * rate;
            ball.style.top = topVar + 'px';
            ball.style.left = leftVar + 'px';
            //если коснулся правой стенки
            if(leftVar>590) counterRight = 1;
        }
        //если двигается вниз от правой стенки
        if(counterRight == 1 && counterLeft == 0) {
            leftVar -= 1 * rate;
            topVar += 1 * rate;
            ball.style.top = topVar + 'px';
            ball.style.left = leftVar + 'px';
            if(leftVar < 1) counterLeft = 1;
            //проверка попал-непопал на блок
            if (topVar>378 && distanceDown<blockWidth && distanceDown>=-1) {
                //Выбор случайного звука, формула генерирует от 0 до 1.
                var rand = Math.round(Math.random());
                if(rand == 1) audio.src = "audio/arkanoid/ping1.ogg";
                else audio.src = "audio/arkanoid/ping2.ogg";
                audio.play();
                counterTop = 0;
                score++;
                scoreSpan.innerHTML = score;
            }
            if (topVar>382) {
                audio.src = "audio/arkanoid/GameOver.ogg";
                audio.play();
                alert("Game Over! *** your score is " + score);
                but.appendChild(button);
                clearInterval(interval);
                scoreSpan.innerHTML = 0;
                downBlock.style.left = 0;
                ball.style.left = 35 + 'px';
                ball.style.top = 378 + 'px';
                info.style.color = "grey";
            }
        }
        //если двигается вниз от левой стенки
        if(counterRight == 1 && counterLeft == 1) {
            leftVar += 1 * rate;
            topVar += 1 * rate;
            ball.style.top = topVar + 'px';
            ball.style.left = leftVar + 'px';
            //если коснулся правой стенки
            if(leftVar>590) counterLeft = 0;
            //проверка попал-непопал на блок
            if (topVar>378 && distanceDown<blockWidth && distanceDown>=-1) {
                var rand = Math.round(Math.random());
                if(rand == 1) audio.src = "audio/arkanoid/ping1.ogg";
                else audio.src = "audio/arkanoid/ping2.ogg";
                audio.play();
                counterTop = 0;
                score++;
                scoreSpan.innerHTML = score;
            }
            if (topVar>382) {
                audio.src = "audio/arkanoid/GameOver.ogg";
                audio.play();
                alert("Game Over! *** your score is " + score);
                but.appendChild(button);
                clearInterval(interval);
                scoreSpan.innerHTML = 0;
                downBlock.style.left = 0;
                ball.style.left = 35 + 'px';
                ball.style.top = 378 + 'px';
                info.style.color = "grey";
            }
        }
    }
}

//функция для двоих игроков
function twoGamePlayer() {
    distanceDown = parseInt(ball.style.left) - parseInt(downBlock.style.left);
    distanceUp = parseInt(ball.style.left) - parseInt(upBlock.style.left);
    //движение вверх
    if(counterTop==0) {
        //право-вверх
        if(counterRight == 0) {
            topVar -= 1 * rate;
            leftVar += 1 * rate;
            ball.style.left = leftVar + 'px';
            ball.style.top = topVar + 'px';
            //если -долетел- до правой стенки
            if(leftVar>590) counterRight = 1;
        }
        if(counterRight == 1) {
            //лево-вверх
            if(counterLeft == 0) {
                topVar -= 1 * rate;
                leftVar -= 1 * rate;
                ball.style.left = leftVar + 'px';
                ball.style.top = topVar + 'px';
            }
            //если долетел до левой стенки
            if(leftVar<10) counterLeft = 1;
            //право-вверх от левой стенки
            if(counterLeft == 1) {
                topVar -= 1 * rate;
                leftVar += 1 * rate;
                ball.style.left = leftVar + 'px';
                ball.style.top = topVar + 'px';
                if(leftVar>590) counterLeft = 0;
            }
        }
        // если долетел до верха
        if (topVar==12 && distanceUp<blockWidth && distanceUp>=-1) {
            //Выбор случайного звука, формула генерирует от 0 до 1.
            var rand = Math.round(Math.random());
            if(rand == 1) audio.src = "audio/arkanoid/ping1.ogg";
            else audio.src = "audio/arkanoid/ping2.ogg";
            audio.play();
            counterTop = 1;
            scoreSpan.innerHTML = score;
        }
        if (topVar<5) {
            audio.src = "audio/arkanoid/GameOver.ogg";
            audio.play();
            alert("Нижний игрок победил!");
            but.appendChild(button);
            clearInterval(interval);
            scoreSpan.innerHTML = 0;
            downBlock.style.left = 0;
            ball.style.left = 35 + 'px';
            ball.style.top = 378 + 'px';
            info.style.color = "grey";
        }   
    }   
    //движение вниз
    if(counterTop == 1) {
        //если двигается вниз от левой стенки
        if(counterRight == 0) {
            leftVar += 1 * rate;
            topVar += 1 * rate;
            ball.style.top = topVar + 'px';
            ball.style.left = leftVar + 'px';
            //если коснулся правой стенки
            if(leftVar>590) counterRight = 1;
        }
        //если двигается вниз от правой стенки
        if(counterRight == 1 && counterLeft == 0) {
            leftVar -= 1 * rate;
            topVar += 1 * rate;
            ball.style.top = topVar + 'px';
            ball.style.left = leftVar + 'px';
            if(leftVar < 1) counterLeft = 1;
            //проверка попал-непопал на блок
            if (topVar>378 && distanceDown<blockWidth && distanceDown>=-1) {
                //Выбор случайного звука, формула генерирует от 0 до 1.
                var rand = Math.round(Math.random());
                if(rand == 1) audio.src = "audio/arkanoid/ping1.ogg";
                else audio.src = "audio/arkanoid/ping2.ogg";
                audio.play();
                counterTop = 0;
                scoreSpan.innerHTML = score;
            }
            if (topVar>382) {
                audio.src = "audio/arkanoid/GameOver.ogg";
                audio.play();
                alert("Верхний игрок победил!");
                but.appendChild(button);
                clearInterval(interval);
                scoreSpan.innerHTML = 0;
                downBlock.style.left = 0;
                ball.style.left = 35 + 'px';
                ball.style.top = 378 + 'px';
                info.style.color = "grey";
            }
        }
        //если двигается вниз от левой стенки
        if(counterRight == 1 && counterLeft == 1) {
            leftVar += 1 * rate;
            topVar += 1 * rate;
            ball.style.top = topVar + 'px';
            ball.style.left = leftVar + 'px';
            //если коснулся правой стенки
            if(leftVar>590) counterLeft = 0;
            //проверка попал-непопал на блок
            if (topVar>378 && distanceDown<blockWidth && distanceDown>=-1) {
                var rand = Math.round(Math.random());
                if(rand == 1) audio.src = "audio/arkanoid/ping1.ogg";
                else audio.src = "audio/arkanoid/ping2.ogg";
                audio.play();
                counterTop = 0;
                scoreSpan.innerHTML = score;
            }
            if (topVar>382) {
                audio.src = "audio/arkanoid/GameOver.ogg";
                audio.play();
                alert("Верхний игрок победил!");
                but.appendChild(button);
                clearInterval(interval);
                scoreSpan.innerHTML = 0;
                downBlock.style.left = 0;
                ball.style.left = 35 + 'px';
                ball.style.top = 378 + 'px';
                info.style.color = "grey";
            }
        }
    }
}