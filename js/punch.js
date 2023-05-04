var timeSpan = document.getElementById("timeSpan");
var scoreSpan = document.getElementById("scoreSpan");
var startButton = document.getElementById("startButton");
var table = document.getElementById("table");
var difficult = document.getElementsByName("difficult");
var timeDifficult = document.getElementsByName("timeDifficult");
var audioTheme = new Audio();
var audioHit = new Audio();
var audioMiss = new Audio();
audioTheme.src = "audio/punch/theme.mp3";
audioHit.src = "audio/punch/hit.ogg";
audioMiss.src = "audio/punch/miss.ogg";

var random = parseInt(Math.random()*7)+1;
var finalRandom = random;
var thisPumpkin = document.getElementById("pumpkin" + random);

//точка входа в программу
startButton.addEventListener('click', playGame);

function playGame() {
    audioTheme.play();
    table.addEventListener("click", function(){audioMiss.play()});
    var score = 0;
    scoreSpan.innerHTML = score;
    //возвращаем положение времени на место
    timeSpan.style.paddingLeft = "150px";
    //Отключаем кнопку старта
    startButton.disabled = true;
    startButton.style.animation = "null";
    //устанавливаем таймер в зависимости от сложности
    var timerOfTimerGame = 0;
    for(var i = 0; i < difficult.length; i++) {
        if(difficult[i].selected == true) {
            timerOfTimerGame = difficult[i].value;
        }
    }
    //устанавливаем длительность игры
    var sec = 0;
    for(var i = 0; i < timeDifficult.length; i++) {
        if(timeDifficult[i].selected == true) {
            sec = timeDifficult[i].value;
        }
    }
    //Таймер табло времени
    var timerTimeSpan = setInterval(function() {
        timeSpan.innerHTML = sec;
        sec--;
        if(sec == -1) {
            //отключаем таймеры
            clearInterval(timerTimeSpan);
            clearInterval(timerGame);
            //включаем кнопку старта
            startButton.style.animation = "pulsate 1.5s linear infinite";
            startButton.disabled = false;
            //вставляем текст в окно времени
            timeSpan.style.paddingLeft = "60px";
            timeSpan.innerHTML = "игра окончена";
            //отключаем музыку 
            audioTheme.load();
        }
    }, 1000)
    //Таймер появления тыкв
    var timerGame = setInterval(function() {
        thisPumpkin.style.zIndex = 1;
        random = parseInt(Math.random()*7)+1;
        finalRandom = parseInt(Math.random()*7)+1;
        //цикл, чтобы тыква не появлялась дважды в 1 месте, если не попал
        while(random == finalRandom) {
            finalRandom = parseInt(Math.random()*7)+1;
        }
        if(random != finalRandom) {
            thisPumpkin = document.getElementById("pumpkin" + finalRandom);
        }
        thisPumpkin.style.zIndex = 2;
        thisPumpkin.onclick = function(e) {
            thisPumpkin.style.cursor = 'url("img/punch/hummerCrit.png")';
            audioHit.play();
            e.target.style.zIndex = 1;
            score += 10;
            scoreSpan.innerHTML = score;
        }
    }, timerOfTimerGame);
}


