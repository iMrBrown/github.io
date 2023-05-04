//рисуем ячейки в главном блоке
var blok = document.getElementById('blok');
for (var i=0; i<9; i++) {
    blok.innerHTML += "<div class='cell'></div>";
}

var arr = document.getElementsByClassName('cell');
var x = 0;
var counter = 0;
//точка входа в программу
blok.onclick = function(event) {
    if(counter == 9) {
        alert("Ничья");
        window.location.reload();
    }
    if(event.target.className == 'cell') {
        // x=x%2;
        if (x==0 && event.target.innerHTML == "") {
            event.target.innerHTML = 'X';
            blok.style.cursor = 'url("img/cross-zero/cursor0.png"), auto';
            counter++;
            x++;
            rezult();
        }
        if (x==1 && event.target.innerHTML == "") {
            event.target.innerHTML = '0';
            blok.style.cursor = 'url("img/cross-zero/cursorX.png"), auto';
            counter++;
            x--;
            rezult();
        }
    }
}

//проверка условий
function rezult () {
    if (arr[0].innerHTML == 'X' && arr[1].innerHTML == 'X' && arr[2].innerHTML == 'X') {
        alert('Победили крестики!'); reloadPage();
    }
    if (arr[3].innerHTML == 'X' && arr[4].innerHTML == 'X' && arr[5].innerHTML == 'X') {
        alert('Победили крестики!'); reloadPage();
    }
    if (arr[6].innerHTML == 'X' && arr[7].innerHTML == 'X' && arr[8].innerHTML == 'X') {
        alert('Победили крестики!'); reloadPage();
    }
    if (arr[0].innerHTML == 'X' && arr[3].innerHTML == 'X' && arr[6].innerHTML == 'X') {
        alert('Победили крестики!'); reloadPage();
    }
    if (arr[1].innerHTML == 'X' && arr[4].innerHTML == 'X' && arr[7].innerHTML == 'X') {
        alert('Победили крестики!'); reloadPage();
    }
    if (arr[2].innerHTML == 'X' && arr[5].innerHTML == 'X' && arr[8].innerHTML == 'X') {
        alert('Победили крестики!'); reloadPage();
    }
    if (arr[0].innerHTML == 'X' && arr[4].innerHTML == 'X' && arr[8].innerHTML == 'X') {
        alert('Победили крестики!'); reloadPage();
    }
    if (arr[6].innerHTML == 'X' && arr[4].innerHTML == 'X' && arr[2].innerHTML == 'X') {
        alert('Победили крестики!'); reloadPage();
    }

    if (arr[0].innerHTML == '0' && arr[1].innerHTML == '0' && arr[2].innerHTML == '0') {
        alert('Победили нолики!'); reloadPage();
    }
    if (arr[3].innerHTML == '0' && arr[4].innerHTML == '0' && arr[5].innerHTML == '0') {
        alert('Победили нолики!'); reloadPage();
    }
    if (arr[6].innerHTML == '0' && arr[7].innerHTML == '0' && arr[8].innerHTML == '0') {
        alert('Победили нолики!'); reloadPage();
    }
    if (arr[0].innerHTML == '0' && arr[3].innerHTML == '0' && arr[6].innerHTML == '0') {
        alert('Победили нолики!'); reloadPage();
    }
    if (arr[1].innerHTML == '0' && arr[4].innerHTML == '0' && arr[7].innerHTML == '0') {
        alert('Победили нолики!'); reloadPage();
    }
    if (arr[2].innerHTML == '0' && arr[5].innerHTML == '0' && arr[8].innerHTML == '0') {
        alert('Победили нолики!'); reloadPage();
    }
    if (arr[0].innerHTML == '0' && arr[4].innerHTML == '0' && arr[8].innerHTML == '0') {
        alert('Победили нолики!'); reloadPage();
    }
    if (arr[6].innerHTML == '0' && arr[4].innerHTML == '0' && arr[2].innerHTML == '0') {
        alert('Победили нолики!'); reloadPage();
    }
}

//функция перезагрузки экрана
function reloadPage() {
    setTimeout(function(){window.location.reload();}, 1000);
}