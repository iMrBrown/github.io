var anchor = document.querySelector('.scrollspy');
var instance1 = M.ScrollSpy.init(anchor, options);
var options = document.getElementsByTagName('option');
var spisok = document.getElementById('spisok');
var inp1 = document.getElementById('inp-a');
var inp2 = document.getElementById('inp-b');
var sel1 = document.getElementById('sel1');
var sel2 = document.getElementById('sel2');

vremya_f();

spisok.onchange = function() {  //создание опций при выборе
    inp1.value = '';
    inp2.value = '';
    for (var i=0; i<options.length; i++) {
        if (options[i].selected == true && options[i].id == 'vremya' ) {
            vremya_f();
        }
        if (options[i].selected == true && options[i].id == 'davl' ) {
            davl_f();
        }
        if (options[i].selected == true && options[i].id == 'dlina') {
            dlina_f();
        }
        if (options[i].selected == true && options[i].id == 'mass') {
            mass_f();
        }
        if (options[i].selected == true && options[i].id == 'ob') {
            ob_f();
        }
        if (options[i].selected == true && options[i].id == 'obi') {
            obi_f();
        }
        if (options[i].selected == true && options[i].id == 'corn') {
            corn_f();
        }
        if (options[i].selected == true && options[i].id == 'plosh') {
            plosh_f();
        }
        if (options[i].selected == true && options[i].id == 'temp') {
            temp_f();
        }
        if (options[i].selected == true && options[i].id == 'chast') {
            chast_f();
        }
        if (options[i].selected == true && options[i].id == 'energ') {
            energ_f();
        }
    }
};

//////////////////////////////////////////функция создания меню времени//////////////////////

function vremya_f() {

    sel1.innerHTML = '<option id="msec"> Миллисекунда </option>';
    sel1.innerHTML += '<option id="sec"> Секунда </option>';
    sel1.innerHTML += '<option id="min"> Минута </option>';
    sel1.innerHTML += '<option id="hour" selected> Час </option>';
    sel1.innerHTML += '<option id="day"> Сутки </option>';
    sel1.innerHTML += '<option id="week"> Неделя </option>';
    sel1.innerHTML += '<option id="month"> Месяц </option>';
    sel1.innerHTML += '<option id="year"> Год </option>';
    sel1_options = sel1.getElementsByTagName('option');


    sel2.innerHTML = '<option id="msec"> Миллисекунда </option>';
    sel2.innerHTML += '<option id="sec" selected> Секунда </option>';
    sel2.innerHTML += '<option id="min"> Минута </option>';
    sel2.innerHTML += '<option id="hour"> Час </option>';
    sel2.innerHTML += '<option id="day"> Сутки </option>';
    sel2.innerHTML += '<option id="week"> Неделя </option>';
    sel2.innerHTML += '<option id="month"> Месяц </option>';
    sel2.innerHTML += '<option id="year"> Год </option>';
    sel2_options = sel2.getElementsByTagName('option');


    var elem = document.querySelectorAll('select');
    var instance = M.FormSelect.init(elem, options);


    inp1.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        vremya_count();
    };

    inp2.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        vremya_count2();
    };

     sel1.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        vremya_count();
    };

    sel2.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        vremya_count();
    };


}

//////////////////////////////////////////функция создания меню давления//////////////////////

function davl_f() {
    sel1.innerHTML = '<option id="atm" selected> Атмосфера </option>';
    sel1.innerHTML += '<option id="bar"> Бар </option>';
    sel1.innerHTML += '<option id="pasc"> Паскаль </option>';
    sel1_options = sel1.getElementsByTagName('option');

    sel2.innerHTML = '<option id="atm"> Атмосфера </option>';
    sel2.innerHTML += '<option id="bar"> Бар </option>';
    sel2.innerHTML += '<option id="pasc" selected> Паскаль </option>';
    sel2_options = sel2.getElementsByTagName('option');

    var elem = document.querySelectorAll('select');
    var instance = M.FormSelect.init(elem, options);

    inp1.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        davl_count();
    };

    inp2.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        davl_count2();
    };

    sel1.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        davl_count();
    };

    sel2.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        davl_count();
    };

}

//////////////////////////////////////////функция создания меню длины//////////////////////

function dlina_f() {
    sel1.innerHTML = '<option id="mkrm"> Микрометр </option>';
    sel1.innerHTML += '<option id="mm"> Миллиметр </option>';
    sel1.innerHTML += '<option id="cm"> Сантиметр </option>';
    sel1.innerHTML += '<option id="dm"> Дециметр </option>';
    sel1.innerHTML += '<option id="m" selected> Метр </option>';
    sel1.innerHTML += '<option id="km"> Километр </option>';
    sel1.innerHTML += '<option id="yard"> Ярд </option>';
    sel1.innerHTML += '<option id="mil"> Миля </option>';
    sel1.innerHTML += '<option id="wmil"> Морская миля </option>';
    sel1.innerHTML += '<option id="fut"> Фут </option>';
    sel1.innerHTML += '<option id="inch"> Дюйм </option>';
    sel1_options = sel1.getElementsByTagName('option');

    sel2.innerHTML = '<option id="mkrm"> Микрометр </option>';
    sel2.innerHTML += '<option id="mm"> Миллиметр </option>';
    sel2.innerHTML += '<option id="cm" selected> Сантиметр </option>';
    sel2.innerHTML += '<option id="dm"> Дециметр </option>';
    sel2.innerHTML += '<option id="m"> Метр </option>';
    sel2.innerHTML += '<option id="km"> Километр </option>';
    sel2.innerHTML += '<option id="yard"> Ярд </option>';
    sel2.innerHTML += '<option id="mil"> Миля </option>';
    sel2.innerHTML += '<option id="wmil"> Морская миля </option>';
    sel2.innerHTML += '<option id="fut"> Фут </option>';
    sel2.innerHTML += '<option id="inch"> Дюйм </option>';
    sel2_options = sel2.getElementsByTagName('option');

    var elem = document.querySelectorAll('select');
    var instance = M.FormSelect.init(elem, options);

    inp1.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        dlina_count();
    };

    inp2.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        dlina_count2();
    };

    sel1.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        dlina_count();
    };

    sel2.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        dlina_count();
    };
}

//////////////////////////////////////////функция создания меню массы//////////////////////

function mass_f() {
    sel1.innerHTML = '<option id="mg"> Миллиграмм </option>';
    sel1.innerHTML += '<option id="g"> Грамм </option>';
    sel1.innerHTML += '<option id="kg" selected> Килограмм </option>';
    sel1.innerHTML += '<option id="t"> Тонна </option>';
    sel1.innerHTML += '<option id="st"> Стоун </option>';
    sel1.innerHTML += '<option id="lb"> Фунт </option>';
    sel1.innerHTML += '<option id="oz"> Унция </option>';
    sel1_options = sel1.getElementsByTagName('option');

    sel2.innerHTML = '<option id="mg"> Миллиграмм </option>';
    sel2.innerHTML += '<option id="g" selected> Грамм </option>';
    sel2.innerHTML += '<option id="kg"> Килограмм </option>';
    sel2.innerHTML += '<option id="t"> Тонна </option>';
    sel2.innerHTML += '<option id="st"> Стоун </option>';
    sel2.innerHTML += '<option id="lb"> Фунт </option>';
    sel2.innerHTML += '<option id="oz"> Унция </option>';
    sel2_options = sel2.getElementsByTagName('option');

    var elem = document.querySelectorAll('select');
    var instance = M.FormSelect.init(elem, options);

    inp1.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        mass_count();
    };

    inp2.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        mass_count2();
    };

    sel1.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        mass_count();
    };

    sel2.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        mass_count();
    };
}

//////////////////////////////////////////функция создания меню объема//////////////////////

function ob_f() {
    sel1.innerHTML = '<option id="cmc"> Сантиметр кубический </option>';
    sel1.innerHTML += '<option id="mc" selected> Кубический метр </option>';
    sel1.innerHTML += '<option id="ml"> Миллилитр </option>';
    sel1.innerHTML += '<option id="l"> Литр </option>';
    sel1.innerHTML += '<option id="gal"> Галлон </option>';
    sel1.innerHTML += '<option id="bbl"> Баррель </option>';
    sel1_options = sel1.getElementsByTagName('option');

    sel2.innerHTML = '<option id="cmc"> Сантиметр кубический </option>';
    sel2.innerHTML += '<option id="mc"> Кубический метр </option>';
    sel2.innerHTML += '<option id="ml"> Миллилитр </option>';
    sel2.innerHTML += '<option id="l" selected> Литр </option>';
    sel2.innerHTML += '<option id="gal"> Галлон </option>';
    sel2.innerHTML += '<option id="bbl"> Баррель </option>';
    sel2_options = sel2.getElementsByTagName('option');

    var elem = document.querySelectorAll('select');
    var instance = M.FormSelect.init(elem, options);

    inp1.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        ob_count();
    };

    inp2.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        ob_count2();
    };

    sel1.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        ob_count();
    };

    sel2.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        ob_count();
    };
}

//////////////////////////////////////////функция создания меню объема информации/////////////

function obi_f() {
    sel1.innerHTML = '<option id="bit"> Бит </option>';
    sel1.innerHTML += '<option id="byte"> Байт </option>';
    sel1.innerHTML += '<option id="kb"> Килобайт </option>';
    sel1.innerHTML += '<option id="mb" selected> Мегабайт </option>';
    sel1.innerHTML += '<option id="gb"> Гигабайт </option>';
    sel1.innerHTML += '<option id="tb"> Терабайт </option>';
    sel1_options = sel1.getElementsByTagName('option');

    sel2.innerHTML = '<option id="bit"> Бит </option>';
    sel2.innerHTML += '<option id="byte"> Байт </option>';
    sel2.innerHTML += '<option id="kb" selected> Килобайт </option>';
    sel2.innerHTML += '<option id="mb"> Мегабайт </option>';
    sel2.innerHTML += '<option id="gb"> Гигабайт </option>';
    sel2.innerHTML += '<option id="tb"> Терабайт </option>';
    sel2_options = sel2.getElementsByTagName('option');

    var elem = document.querySelectorAll('select');
    var instance = M.FormSelect.init(elem, options);

    inp1.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        obi_count();
    };

    inp2.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        obi_count2();
    };

    sel1.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        obi_count();
    };

    sel2.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        obi_count();
    };
}

//////////////////////////////////////////функция создания меню угла/////////////////////////

function corn_f() {
    sel1.innerHTML = '<option id="c"> Градус </option>';
    sel1.innerHTML += '<option id="csec"> Угловая секунда </option>';
    sel1.innerHTML += '<option id="cmin"> Минута дуги </option>';
    sel1.innerHTML += '<option id="cr" selected> Радиан </option>';
    sel1_options = sel1.getElementsByTagName('option');

    sel2.innerHTML = '<option id="c" selected> Градус </option>';
    sel2.innerHTML += '<option id="csec"> Угловая секунда </option>';
    sel2.innerHTML += '<option id="cmin"> Минута дуги </option>';
    sel2.innerHTML += '<option id="cr"> Радиан </option>';
    sel2_options = sel2.getElementsByTagName('option');

    var elem = document.querySelectorAll('select');
    var instance = M.FormSelect.init(elem, options);

    inp1.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        corn_count();
    };

    inp2.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        corn_count2();
    };

    sel1.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        corn_count();
    };

    sel2.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        corn_count();
    };
}

//////////////////////////////////////////функция создания меню площади/////////////////////////

function plosh_f() {
    sel1.innerHTML = '<option id="kvm"> Квадратный метр </option>';
    sel1.innerHTML += '<option id="kvkm"> Квадратный километр </option>';
    sel1.innerHTML += '<option id="gek" selected> Гектар </option>';
    sel1.innerHTML += '<option id="akr"> Акр </option>';
    sel1_options = sel1.getElementsByTagName('option');

    sel2.innerHTML = '<option id="kvm" selected> Квадратный метр </option>';
    sel2.innerHTML += '<option id="kvkm"> Квадратный километр </option>';
    sel2.innerHTML += '<option id="gek"> Гектар </option>';
    sel2.innerHTML += '<option id="akr"> Акр </option>';
    sel2_options = sel2.getElementsByTagName('option');

    var elem = document.querySelectorAll('select');
    var instance = M.FormSelect.init(elem, options);

    inp1.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        plosh_count();
    };

    inp2.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        plosh_count2();
    };

    sel1.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        plosh_count();
    };

    sel2.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        plosh_count();
    };
}

//////////////////////////////////////////функция создания меню температуры/////////////////////////

function temp_f() {
    sel1.innerHTML = '<option id="ce" selected> Градус Цельсия </option>';
    sel1.innerHTML += '<option id="far"> Градус Фаренгейта </option>';
    sel1.innerHTML += '<option id="kel"> Кельвин </option>';
    sel1_options = sel1.getElementsByTagName('option');

    sel2.innerHTML = '<option id="ce"> Градус Цельсия </option>';
    sel2.innerHTML += '<option id="far" selected> Градус Фаренгейта </option>';
    sel2.innerHTML += '<option id="kel"> Кельвин </option>';
    sel2_options = sel2.getElementsByTagName('option');

    var elem = document.querySelectorAll('select');
    var instance = M.FormSelect.init(elem, options);

    inp1.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        temp_count();
    };

    inp2.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        temp_count2();
    };

    sel1.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        temp_count();
    };

    sel2.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        temp_count();
    };
}

//////////////////////////////////////////функция создания меню частоты/////////////////////////

function chast_f() {
    sel1.innerHTML = '<option id="gc"> Герц </option>';
    sel1.innerHTML += '<option id="kgc" selected> Килогерц </option>';
    sel1.innerHTML += '<option id="mgc"> Мегагерц </option>';
    sel1_options = sel1.getElementsByTagName('option');

    sel2.innerHTML = '<option id="gc" selected> Герц </option>';
    sel2.innerHTML += '<option id="kgc"> Килогерц </option>';
    sel2.innerHTML += '<option id="mgc"> Мегагерц </option>';
    sel2_options = sel2.getElementsByTagName('option');

    var elem = document.querySelectorAll('select');
    var instance = M.FormSelect.init(elem, options);

    inp1.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        chast_count();
    };

    inp2.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        chast_count2();
    };

    sel1.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        chast_count();
    };

    sel2.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        chast_count();
    };
}

//////////////////////////////////////////функция создания меню энергии/////////////////////////

function energ_f() {
    sel1.innerHTML = '<option id="dz"> Джоуль </option>';
    sel1.innerHTML += '<option id="wt"> Ватт </option>';
    sel1.innerHTML += '<option id="kwt" selected> Киловатт </option>';
    sel1.innerHTML += '<option id="kl"> Килокалория </option>';
    sel1_options = sel1.getElementsByTagName('option');

    sel2.innerHTML = '<option id="dz"> Джоуль </option>';
    sel2.innerHTML += '<option id="wt" selected> Ватт </option>';
    sel2.innerHTML += '<option id="kwt"> Киловатт </option>';
    sel2.innerHTML += '<option id="kl"> Килокалория </option>';
    sel2_options = sel2.getElementsByTagName('option');

    var elem = document.querySelectorAll('select');
    var instance = M.FormSelect.init(elem, options);

    inp1.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        energ_count();
    };

    inp2.oninput = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        energ_count2();
    };

    sel1.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        energ_count();
    };

    sel2.onchange = function() {
        inp1_v = inp1.value;
        inp2_v = inp2.value;
        inp1_v = parseFloat(inp1_v);
        inp2_v = parseFloat(inp2_v);
        energ_count();
    };
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////// функции рассчета времени ////////////////////////////////////////


function vremya_count() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'msec') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'msec') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'sec') {
                    inp2.value = (inp1_v/1000);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'min') {
                    inp2.value = (inp1_v/60000);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'hour') {
                    inp2.value = (inp1_v/3600000);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'day') {
                    inp2.value = (inp1_v/86400000);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'week') {
                    inp2.value = (inp1_v/604800000);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'month') {
                    inp2.value = (inp1_v/2419200000);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'year') {
                    inp2.value = (inp1_v/31536000000);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'sec') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'msec') {
                    inp2.value = inp1_v*1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'sec') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'min') {
                    inp2.value = inp1_v/60;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'hour') {
                    inp2.value = (inp1_v/3600);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'day') {
                    inp2.value = (inp1_v/86400);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'week') {
                    inp2.value = (inp1_v/604800);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'month') {
                    inp2.value = (inp1_v/2419200);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'year') {
                    inp2.value = (inp1_v/31536000);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'min') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'msec') {
                    inp2.value = inp1_v*60000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'sec') {
                    inp2.value = inp1_v*60;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'min') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'hour') {
                    inp2.value = (inp1_v/60);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'day') {
                    inp2.value = (inp1_v/1440);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'week') {
                    inp2.value = (inp1_v/10080);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'month') {
                    inp2.value = (inp1_v/40320);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'year') {
                    inp2.value = (inp1_v/525600);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'hour') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'msec') {
                    inp2.value = inp1_v*3600000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'sec') {
                    inp2.value = inp1_v*3600;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'min') {
                    inp2.value = inp1_v*60;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'hour') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'day') {
                    inp2.value = inp1_v/24;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'week') {
                    inp2.value = inp1_v/168;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'month') {
                    inp2.value = (inp1_v/672);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'year') {
                    inp2.value = (inp1_v/61320);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'day') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'msec') {
                    inp2.value = inp1_v*86400000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'sec') {
                    inp2.value = inp1_v*86400;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'min') {
                    inp2.value = inp1_v*1440;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'hour') {
                    inp2.value = inp1_v*24;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'day') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'week') {
                    inp2.value = inp1_v/7;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'month') {
                    inp2.value = (inp1_v/30);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'year') {
                    inp2.value = (inp1_v/365);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'week') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'msec') {
                    inp2.value = inp1_v*604800000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'sec') {
                    inp2.value = inp1_v*604800;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'min') {
                    inp2.value = inp1_v*10080;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'hour') {
                    inp2.value = inp1_v*168;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'day') {
                    inp2.value = inp1_v*7;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'week') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'month') {
                    inp2.value = (inp1_v/4);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'year') {
                    inp2.value = (inp1_v/48);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'month') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'msec') {
                    inp2.value = inp1_v*2592000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'sec') {
                    inp2.value = inp1_v*2592000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'min') {
                    inp2.value = inp1_v*43200;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'hour') {
                    inp2.value = inp1_v*720;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'day') {
                    inp2.value = inp1_v*30;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'week') {
                    inp2.value = inp1_v*4;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'month') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'year') {
                    inp2.value = inp1_v/12;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'year') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'msec') {
                    inp2.value = inp1_v*31536000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'sec') {
                    inp2.value = inp1_v*31536000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'min') {
                    inp2.value = inp1_v*525600;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'hour') {
                    inp2.value = inp1_v*8760;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'day') {
                    inp2.value = inp1_v*365;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'week') {
                    inp2.value = inp1_v*48;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'month') {
                    inp2.value = inp1_v*12;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'year') {
                    inp2.value = inp1_v;
                }
            }
        }
    }
}
function vremya_count2() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'msec') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'msec') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'sec') {
                    inp1.value = (inp2_v*1000);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'min') {
                    inp1.value = (inp2_v*60000);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'hour') {
                    inp1.value = (inp2_v*3600000);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'day') {
                    inp1.value = (inp2_v*86400000);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'week') {
                    inp1.value = (inp2_v*604800000);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'month') {
                    inp1.value = (inp2_v*2419200000);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'year') {
                    inp1.value = (inp2_v*31536000000);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'sec') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'msec') {
                    inp1.value = inp2_v/1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'sec') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'min') {
                    inp1.value = inp2_v*60;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'hour') {
                    inp1.value = (inp2_v*3600);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'day') {
                    inp1.value = (inp2_v*86400);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'week') {
                    inp1.value = (inp2_v*604800);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'month') {
                    inp1.value = (inp2_v*2419200);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'year') {
                    inp1.value = (inp1_v*31536000);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'min') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'msec') {
                    inp1.value = inp2_v/60000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'sec') {
                    inp1.value = inp2_v/60;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'min') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'hour') {
                    inp1.value = (inp2_v*60);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'day') {
                    inp1.value = (inp1_v*1440);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'week') {
                    inp1.value = (inp1_v*10080);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'month') {
                    inp1.value = (inp1_v*40320);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'year') {
                    inp1.value = (inp1_v*525600);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'hour') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'msec') {
                    inp1.value = inp2_v/3600000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'sec') {
                    inp1.value = inp2_v/3600;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'min') {
                    inp1.value = inp2_v/60;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'hour') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'day') {
                    inp1.value = inp2_v*24;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'week') {
                    inp1.value = inp2_v*168;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'month') {
                    inp1.value = (inp2_v*672);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'year') {
                    inp1.value = (inp2_v*61320);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'day') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'msec') {
                    inp1.value = inp2_v/86400000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'sec') {
                    inp1.value = inp2_v/86400;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'min') {
                    inp1.value = inp2_v/1440;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'hour') {
                    inp1.value = inp2_v/24;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'day') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'week') {
                    inp1.value = inp1_v*7;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'month') {
                    inp1.value = (inp2_v*30);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'year') {
                    inp1.value = (inp2_v*365);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'week') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'msec') {
                    inp1.value = inp2_v/604800000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'sec') {
                    inp1.value = inp2_v/604800;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'min') {
                    inp1.value = inp2_v/10080;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'hour') {
                    inp1.value = inp2_v/168;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'day') {
                    inp1.value = inp2_v/7;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'week') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'month') {
                    inp1.value = (inp2_v*4);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'year') {
                    inp1.value = (inp2_v*48);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'month') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'msec') {
                    inp1.value = inp2_v/2592000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'sec') {
                    inp1.value = inp2_v/2592000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'min') {
                    inp1.value = inp2_v/43200;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'hour') {
                    inp1.value = inp2_v/720;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'day') {
                    inp1.value = inp2_v/30;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'week') {
                    inp1.value = inp2_v/4;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'month') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'year') {
                    inp1.value = inp2_v*12;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'year') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'msec') {
                    inp1.value = inp2_v/31536000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'sec') {
                    inp1.value = inp2_v/31536000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'min') {
                    inp1.value = inp2_v/525600;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'hour') {
                    inp1.value = inp2_v/8760;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'day') {
                    inp1.value = inp2_v*365;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'week') {
                    inp1.value = inp2_v*48;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'month') {
                    inp1.value = inp2_v*12;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'year') {
                    inp1.value = inp2_v;
                }
            }
        }
    }
}

////////////////////////////// функции рассчета давления ///////////////////////////////////////

function davl_count() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'atm') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'atm') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bar') {
                    inp2.value = (inp1_v*1.01325).toFixed(6);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'pasc') {
                    inp2.value = (inp1_v*101325);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'bar') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'atm') {
                    inp2.value = (inp1_v*0.986923).toFixed(6);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bar') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'pasc') {
                    inp2.value = (inp1_v*100000);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'pasc') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'atm') {
                    inp2.value = (inp1_v/980665).toFixed(6);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bar') {
                    inp2.value = (inp1_v/100000);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'pasc') {
                    inp2.value = inp1_v;
                }
            }
        }
    }
}
function davl_count2() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'atm') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'atm') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bar') {
                    inp1.value = (inp2_v/1.01325).toFixed(3);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'pasc') {
                    inp1.value = (inp2_v/101325);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'bar') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'atm') {
                    inp1.value = (inp2_v/0.986923).toFixed(3);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bar') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'pasc') {
                    inp1.value = (inp2_v/100000);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'pasc') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'atm') {
                    inp1.value = (inp2_v*980665).toFixed(3);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bar') {
                    inp1.value = (inp2_v*100000);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'pasc') {
                    inp1.value = inp2_v;
                }
            }
        }
    }
}

////////////////////////////// функции рассчета длины ///////////////////////////////////////

function dlina_count() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'mkrm') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp2.value = inp1_v/1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp2.value = inp1_v/10000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp2.value = inp1_v/100000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp2.value = inp1_v/1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp2.value = inp1_v/1000000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp2.value = inp1_v/914400;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp2.value = inp1_v/304800;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp2.value = inp1_v/25400;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp2.value = inp1_v/1609344000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp2.value = inp1_v/1852000000;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'mm') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp2.value = inp1_v*1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp2.value = inp1_v/10;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp2.value = inp1_v/100;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp2.value = inp1_v/1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp2.value = inp1_v/1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp2.value = inp1_v/914.4;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp2.value = inp1_v/304.8;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp2.value = inp1_v/25.4;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp2.value = inp1_v/1609344;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp2.value = inp1_v/1852000;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'cm') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp2.value = inp1_v*10000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp2.value = inp1_v*10;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp2.value = inp1_v/10;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp2.value = inp1_v/100;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp2.value = inp1_v/100000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp2.value = inp1_v/91.44;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp2.value = inp1_v/30.48;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp2.value = inp1_v/2.54;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp2.value = inp1_v/160934.4;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp2.value = inp1_v/185200;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'dm') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp2.value = inp1_v*100000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp2.value = inp1_v*100;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp2.value = inp1_v*10;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp2.value = inp1_v/10;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp2.value = inp1_v/10000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp2.value = inp1_v/9.144;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp2.value = inp1_v/3.048;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp2.value = inp1_v/0.254;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp2.value = inp1_v/16093.44;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp2.value = inp1_v/18520;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'm') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp2.value = inp1_v*1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp2.value = inp1_v*1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp2.value = inp1_v*100;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp2.value = inp1_v*10;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp2.value = inp1_v/1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp2.value = inp1_v/0.9144;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp2.value = inp1_v/0.3048;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp2.value = inp1_v/0.0254;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp2.value = inp1_v/1609.344;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp2.value = inp1_v/1852;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'km') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp2.value = inp1_v*1000000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp2.value = inp1_v*1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp2.value = inp1_v*100000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp2.value = inp1_v*10000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp2.value = inp1_v*1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp2.value = inp1_v*1093.6133;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp2.value = inp1_v*3280.84;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp2.value = inp1_v*39370.079;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp2.value = inp1_v*0.621;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp2.value = inp1_v*0.54;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'yard') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp2.value = inp1_v*914400;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp2.value = inp1_v*914.4;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp2.value = inp1_v*91.44;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp2.value = inp1_v*9.144;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp2.value = inp1_v*0.9144;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp2.value = inp1_v*0.0009144;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp2.value = inp1_v*3;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp2.value = inp1_v*36;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp2.value = inp1_v*0.00056818;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp2.value = inp1_v*0.000493736;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'fut') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp2.value = inp1_v*304800;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp2.value = inp1_v*304.8;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp2.value = inp1_v*30.48;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp2.value = inp1_v*3.048;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp2.value = inp1_v*0.3048;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp2.value = inp1_v*0.0003048;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp2.value = inp1_v*0.3333;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp2.value = inp1_v*12;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp2.value = inp1_v*0.000189394;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp2.value = inp1_v*0.0001645788;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'inch') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp2.value = inp1_v*25400;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp2.value = inp1_v*25.4;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp2.value = inp1_v*2.54;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp2.value = inp1_v*0.254;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp2.value = inp1_v*0.0254;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp2.value = inp1_v*0.0000254;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp2.value = inp1_v*0.0277777;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp2.value = inp1_v*0.083333;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp2.value = inp1_v*0.000015782;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp2.value = inp1_v*0.000013715;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'mil') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp2.value = inp1_v*1609343999.9;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp2.value = inp1_v*1609343.9;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp2.value = inp1_v*160934.4;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp2.value = inp1_v*16093.44;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp2.value = inp1_v*1609.344;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp2.value = inp1_v*1.60935;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp2.value = inp1_v*1759.99;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp2.value = inp1_v*5279.99;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp2.value = inp1_v*63359.99;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp2.value = inp1_v*0.86897;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'wmil') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp2.value = inp1_v*1852000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp2.value = inp1_v*1852000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp2.value = inp1_v*185200;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp2.value = inp1_v*18520;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp2.value = inp1_v*1852;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp2.value = inp1_v*1.852;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp2.value = inp1_v*2025.37182;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp2.value = inp1_v*6076.115;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp2.value = inp1_v*72913.385;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp2.value = inp1_v*1.150779;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp2.value = inp1_v;
                }
            }
        }
    }
}
function dlina_count2() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'mkrm') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp1.value = inp2_v*1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp1.value = inp2_v*10000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp1.value = inp2_v*100000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp1.value = inp2_v*1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp1.value = inp2_v*1000000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp1.value = inp2_v*914400;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp1.value = inp2_v*304800;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp1.value = inp2_v*25400;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp1.value = inp2_v*1609344000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp1.value = inp2_v*1852000000;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'mm') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp1.value = inp2_v/1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp1.value = inp2_v*10;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp1.value = inp2_v*100;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp1.value = inp2_v*1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp1.value = inp2_v*1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp1.value = inp2_v*914.4;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp1.value = inp2_v*304.8;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp1.value = inp2_v*25.4;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp1.value = inp2_v*1609344;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp1.value = inp2_v*1852000;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'cm') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp1.value = inp2_v/10000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp1.value = inp2_v/10;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp1.value = inp2_v*10;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp1.value = inp2_v*100;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp1.value = inp2_v*100000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp1.value = inp2_v*91.44;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp1.value = inp2_v*30.48;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp1.value = inp2_v*2.54;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp1.value = inp2_v*160934.4;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp1.value = inp2_v*185200;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'dm') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp1.value = inp2_v/100000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp1.value = inp2_v/100;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp1.value = inp2_v/10;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp1.value = inp2_v*10;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp1.value = inp2_v*10000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp1.value = inp2_v*9.144;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp1.value = inp2_v*3.048;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp1.value = inp2_v*0.254;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp1.value = inp2_v*16093.44;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp1.value = inp2_v*18520;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'm') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp1.value = inp2_v/1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp1.value = inp2_v/1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp1.value = inp2_v/100;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp1.value = inp2_v/10;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp1.value = inp2_v*1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp1.value = inp2_v*0.9144;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp1.value = inp2_v*0.3048;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp1.value = inp2_v*0.0254;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp1.value = inp2_v*1609.344;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp1.value = inp2_v*1852;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'km') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp1.value = inp2_v/1000000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp1.value = inp2_v/1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp1.value = inp2_v/100000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp1.value = inp2_v/10000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp1.value = inp2_v/1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp1.value = inp2_v/1093.6133;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp1.value = inp2_v/3280.84;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp1.value = inp2_v/39370.079;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp1.value = inp2_v/0.621;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp1.value = inp2_v/0.54;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'yard') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp1.value = inp2_v/914400;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp1.value = inp2_v/914.4;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp1.value = inp2_v/91.44;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp1.value = inp2_v/9.144;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp1.value = inp2_v/0.9144;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp1.value = inp2_v/0.0009144;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp1.value = inp2_v/3;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp1.value = inp2_v/36;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp1.value = inp2_v/0.00056818;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp1.value = inp2_v/0.000493736;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'fut') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp1.value = inp2_v/304800;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp1.value = inp2_v/304.8;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp1.value = inp2_v/30.48;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp1.value = inp2_v/3.048;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp1.value = inp2_v/0.3048;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp1.value = inp2_v/0.0003048;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp1.value = inp2_v/0.3333;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp1.value = inp2_v/12;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp1.value = inp2_v/0.000189394;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp1.value = inp2_v/0.0001645788;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'inch') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp1.value = inp2_v/25400;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp1.value = inp2_v/25.4;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp1.value = inp2_v/2.54;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp1.value = inp2_v/0.254;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp1.value = inp2_v/0.0254;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp1.value = inp2_v/0.0000254;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp1.value = inp2_v/0.0277777;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp1.value = inp2_v/0.083333;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp1.value = inp2_v/0.000015782;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp1.value = inp2_v/0.000013715;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'mil') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp1.value = inp2_v/1609343999.9;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp1.value = inp2_v/1609343.9;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp1.value = inp2_v/160934.4;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp1.value = inp2_v/16093.44;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp1.value = inp2_v/1609.344;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp1.value = inp2_v/1.60935;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp1.value = inp2_v/1759.99;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp1.value = inp2_v/5279.99;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp1.value = inp2_v/63359.99;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp1.value = inp2_v/0.86897;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'wmil') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mkrm') {
                    inp1.value = inp2_v/1852000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mm') {
                    inp1.value = inp2_v/1852000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cm') {
                    inp1.value = inp2_v/185200;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dm') {
                    inp1.value = inp2_v/18520;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'm') {
                    inp1.value = inp2_v/1852;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'km') {
                    inp1.value = inp2_v/1.852;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'yard') {
                    inp1.value = inp2_v/2025.37182;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'fut') {
                    inp1.value = inp2_v/6076.115;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'inch') {
                    inp1.value = inp2_v/72913.385;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mil') {
                    inp1.value = inp2_v/1.150779;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wmil') {
                    inp1.value = inp2_v;
                }
            }
        }
    }
}

////////////////////////////// функции рассчета массы ///////////////////////////////////////

function mass_count() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'mg') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mg') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'g') {
                    inp2.value = inp1_v*0.001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kg') {
                    inp2.value = (inp1_v*0.000001);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 't') {
                    inp2.value = (inp1_v*0.000000001);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'st') {
                    inp2.value = (inp1_v*0.00000017636);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'lb') {
                    inp2.value = (inp1_v*0.00000220462);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'oz') {
                    inp2.value = (inp1_v*0.000035274);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'g') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mg') {
                    inp2.value = inp1_v*1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'g') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kg') {
                    inp2.value = (inp1_v*0.001);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 't') {
                    inp2.value = (inp1_v*0.000001);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'st') {
                    inp2.value = (inp1_v*0.00015747);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'lb') {
                    inp2.value = (inp1_v*0.0022046);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'oz') {
                    inp2.value = (inp1_v*0.03527396);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'kg') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mg') {
                    inp2.value = inp1_v*1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'g') {
                    inp2.value = inp1_v*1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kg') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 't') {
                    inp2.value = (inp1_v*0.001);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'st') {
                    inp2.value = (inp1_v*0.157473);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'lb') {
                    inp2.value = (inp1_v*2.20462);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'oz') {
                    inp2.value = (inp1_v*35.27396);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 't') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mg') {
                    inp2.value = inp1_v*1000000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'g') {
                    inp2.value = inp1_v*1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kg') {
                    inp2.value = inp1_v*1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 't') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'st') {
                    inp2.value = (inp1_v*157.473);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'lb') {
                    inp2.value = (inp1_v*2204.622);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'oz') {
                    inp2.value = (inp1_v*35273.961);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'st') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mg') {
                    inp2.value = inp1_v*6350293.18;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'g') {
                    inp2.value = inp1_v*6350.293;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kg') {
                    inp2.value = inp1_v*6.35;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 't') {
                    inp2.value = inp1_v*0.00635;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'st') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'lb') {
                    inp2.value = (inp1_v*13.999);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'oz') {
                    inp2.value = (inp1_v*224);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'lb') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mg') {
                    inp2.value = inp1_v*453592.369;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'g') {
                    inp2.value = inp1_v*453.592;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kg') {
                    inp2.value = inp1_v*0.45359;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 't') {
                    inp2.value = inp1_v*0.000453;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'st') {
                    inp2.value = inp1_v*0.071428;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'lb') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'oz') {
                    inp2.value = (inp1_v*15.9);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'oz') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mg') {
                    inp2.value = inp1_v*28349.5;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'g') {
                    inp2.value = inp1_v*28.349;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kg') {
                    inp2.value = inp1_v*0.02834;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 't') {
                    inp2.value = inp1_v*0.0000283;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'st') {
                    inp2.value = inp1_v*0.004464;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'lb') {
                    inp2.value = inp1_v*0.0625;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'oz') {
                    inp2.value = inp1_v;
                }
            }
        }
    }
}
function mass_count2() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'mg') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mg') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'g') {
                    inp1.value = inp2_v/0.001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kg') {
                    inp1.value = (inp2_v/0.000001);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 't') {
                    inp1.value = (inp2_v/0.000000001);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'st') {
                    inp1.value = (inp2_v/0.00000017636);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'lb') {
                    inp1.value = (inp2_v/0.00000220462);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'oz') {
                    inp1.value = (inp2_v*0.000035274);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'g') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mg') {
                    inp1.value = inp2_v/1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'g') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kg') {
                    inp1.value = (inp2_v/0.001);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 't') {
                    inp1.value = (inp2_v/0.000001);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'st') {
                    inp1.value = (inp2_v/0.00015747);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'lb') {
                    inp1.value = (inp2_v/0.0022046);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'oz') {
                    inp1.value = (inp2_v/0.03527396);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'kg') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mg') {
                    inp1.value = inp2_v/1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'g') {
                    inp1.value = inp2_v/1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kg') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 't') {
                    inp1.value = (inp2_v/0.001);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'st') {
                    inp1.value = (inp2_v/0.157473);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'lb') {
                    inp1.value = (inp2_v/2.20462);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'oz') {
                    inp1.value = (inp2_v/35.27396);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 't') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mg') {
                    inp1.value = inp2_v/1000000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'g') {
                    inp1.value = inp2_v/1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kg') {
                    inp1.value = inp2_v/1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 't') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'st') {
                    inp1.value = (inp2_v/157.473);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'lb') {
                    inp1.value = (inp2_v/2204.622);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'oz') {
                    inp1.value = (inp2_v/35273.961);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'st') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mg') {
                    inp1.value = inp2_v/6350293.18;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'g') {
                    inp1.value = inp2_v/6350.293;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kg') {
                    inp1.value = inp2_v/6.35;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 't') {
                    inp1.value = inp2_v/0.00635;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'st') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'lb') {
                    inp1.value = (inp2_v/13.999);
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'oz') {
                    inp1.value = (inp2_v/224);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'lb') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mg') {
                    inp1.value = inp2_v/453592.369;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'g') {
                    inp1.value = inp2_v/453.592;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kg') {
                    inp1.value = inp2_v/0.45359;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 't') {
                    inp1.value = inp2_v/0.000453;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'st') {
                    inp1.value = inp2_v/0.071428;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'lb') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'oz') {
                    inp1.value = (inp2_v/15.9);
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'oz') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mg') {
                    inp1.value = inp2_v/28349.5;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'g') {
                    inp1.value = inp2_v/28.349;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kg') {
                    inp1.value = inp2_v/0.02834;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 't') {
                    inp1.value = inp2_v/0.0000283;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'st') {
                    inp1.value = inp2_v/0.004464;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'lb') {
                    inp1.value = inp2_v/0.0625;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'oz') {
                    inp1.value = inp2_v;
                }
            }
        }
    }
}

////////////////////////////// функции рассчета объема ///////////////////////////////////////

function ob_count() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'cmc') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmc') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mc') {
                    inp2.value = inp1_v*0.000001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'ml') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'l') {
                    inp2.value = inp1_v*0.001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gal') {
                    inp2.value = inp1_v*0.000264;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bbl') {
                    inp2.value = inp1_v*0.0000062898;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'mc') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmc') {
                    inp2.value = inp1_v*1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mc') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'ml') {
                    inp2.value = inp1_v*1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'l') {
                    inp2.value = inp1_v*1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gal') {
                    inp2.value = inp1_v*264.172;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bbl') {
                    inp2.value = inp1_v*6.2898;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'ml') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmc') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mc') {
                    inp2.value = inp1_v*0.000001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'ml') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'l') {
                    inp2.value = inp1_v*0.001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gal') {
                    inp2.value = inp1_v*0.00026417;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bbl') {
                    inp2.value = inp1_v*0.00000628;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'ml') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmc') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mc') {
                    inp2.value = inp1_v*0.000001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'ml') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'l') {
                    inp2.value = inp1_v*0.001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gal') {
                    inp2.value = inp1_v*0.00026417;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bbl') {
                    inp2.value = inp1_v*0.00000628;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'l') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmc') {
                    inp2.value = inp1_v*1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mc') {
                    inp2.value = inp1_v*0.001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'ml') {
                    inp2.value = inp1_v*1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'l') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gal') {
                    inp2.value = inp1_v*0.26417;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bbl') {
                    inp2.value = inp1_v*0.006289;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'gal') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmc') {
                    inp2.value = inp1_v*3785.411;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mc') {
                    inp2.value = inp1_v*0.003785;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'ml') {
                    inp2.value = inp1_v*3785.411;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'l') {
                    inp2.value = inp1_v*3.78541;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gal') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bbl') {
                    inp2.value = inp1_v*0.0238;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'bbl') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmc') {
                    inp2.value = inp1_v*158987.294;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mc') {
                    inp2.value = inp1_v*0.15898;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'ml') {
                    inp2.value = inp1_v*158987.294;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'l') {
                    inp2.value = inp1_v*158.987;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gal') {
                    inp2.value = inp1_v*42;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bbl') {
                    inp2.value = inp1_v;
                }
            }
        }
    }
}
function ob_count2() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'cmc') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmc') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mc') {
                    inp1.value = inp2_v/0.000001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'ml') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'l') {
                    inp1.value = inp2_v/0.001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gal') {
                    inp1.value = inp2_v/0.000264;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bbl') {
                    inp1.value = inp2_v/0.0000062898;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'mc') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmc') {
                    inp1.value = inp2_v/1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mc') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'ml') {
                    inp1.value = inp2_v/1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'l') {
                    inp1.value = inp2_v/1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gal') {
                    inp1.value = inp2_v/264.172;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bbl') {
                    inp1.value = inp2_v/6.2898;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'ml') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmc') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mc') {
                    inp1.value = inp2_v/0.000001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'ml') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'l') {
                    inp1.value = inp2_v/0.001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gal') {
                    inp1.value = inp2_v/0.00026417;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bbl') {
                    inp1.value = inp2_v/0.00000628;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'ml') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmc') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mc') {
                    inp1.value = inp2_v/0.000001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'ml') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'l') {
                    inp1.value = inp2_v/0.001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gal') {
                    inp1.value = inp2_v/0.00026417;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bbl') {
                    inp1.value = inp2_v/0.00000628;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'l') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmc') {
                    inp1.value = inp2_v/1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mc') {
                    inp1.value = inp2_v/0.001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'ml') {
                    inp1.value = inp2_v/1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'l') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gal') {
                    inp1.value = inp2_v/0.26417;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bbl') {
                    inp1.value = inp2_v/0.006289;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'gal') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmc') {
                    inp1.value = inp2_v/3785.411;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mc') {
                    inp1.value = inp2_v/0.003785;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'ml') {
                    inp1.value = inp2_v/3785.411;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'l') {
                    inp1.value = inp2_v/3.78541;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gal') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bbl') {
                    inp1.value = inp2_v/0.0238;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'bbl') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmc') {
                    inp1.value = inp2_v/158987.294;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mc') {
                    inp1.value = inp2_v/0.15898;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'ml') {
                    inp1.value = inp2_v/158987.294;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'l') {
                    inp1.value = inp2_v/158.987;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gal') {
                    inp1.value = inp2_v/42;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bbl') {
                    inp1.value = inp2_v;
                }
            }
        }
    }
}

////////////////////////////// функции рассчета объема информации ////////////////////////////

function obi_count() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'bit') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bit') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'byte') {
                    inp2.value = inp1_v*0.125;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kb') {
                    inp2.value = inp1_v*0.000125;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mb') {
                    inp2.value = inp1_v/8000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gb') {
                    inp2.value = inp1_v/8000000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'tb') {
                    inp2.value = inp1_v/8000000000000;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'byte') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bit') {
                    inp2.value = inp1_v*8;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'byte') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kb') {
                    inp2.value = inp1_v/1024;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mb') {
                    inp2.value = inp1_v/1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gb') {
                    inp2.value = inp1_v/1000000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'tb') {
                    inp2.value = inp1_v/1000000000000;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'kb') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bit') {
                    inp2.value = inp1_v*8000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'byte') {
                    inp2.value = inp1_v*8;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kb') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mb') {
                    inp2.value = inp1_v/1024;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gb') {
                    inp2.value = inp1_v/1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'tb') {
                    inp2.value = inp1_v/1000000000;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'mb') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bit') {
                    inp2.value = inp1_v*8000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'byte') {
                    inp2.value = inp1_v*1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kb') {
                    inp2.value = inp1_v*1024;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mb') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gb') {
                    inp2.value = inp1_v/1024;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'tb') {
                    inp2.value = inp1_v/1024000;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'gb') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bit') {
                    inp2.value = inp1_v*8000000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'byte') {
                    inp2.value = inp1_v*1000000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kb') {
                    inp2.value = inp1_v*1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mb') {
                    inp2.value = inp1_v*1024;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gb') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'tb') {
                    inp2.value = inp1_v/1024;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'tb') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bit') {
                    inp2.value = inp1_v*8000000000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'byte') {
                    inp2.value = inp1_v*1000000000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kb') {
                    inp2.value = inp1_v*1000000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mb') {
                    inp2.value = inp1_v*1024000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gb') {
                    inp2.value = inp1_v*1024;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'tb') {
                    inp2.value = inp1_v;
                }
            }
        }
    }
}
function obi_count2() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'bit') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bit') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'byte') {
                    inp1.value = inp2_v/0.125;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kb') {
                    inp1.value = inp2_v/0.000125;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mb') {
                    inp1.value = inp2_v*8000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gb') {
                    inp1.value = inp2_v*8000000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'tb') {
                    inp1.value = inp2_v*8000000000000;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'byte') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bit') {
                    inp1.value = inp2_v/8;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'byte') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kb') {
                    inp1.value = inp2_v*1024;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mb') {
                    inp1.value = inp2_v*1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gb') {
                    inp1.value = inp2_v*1000000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'tb') {
                    inp1.value = inp2_v*1000000000000;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'kb') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bit') {
                    inp1.value = inp2_v/8000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'byte') {
                    inp1.value = inp2_v/8;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kb') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mb') {
                    inp1.value = inp2_v*1024;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gb') {
                    inp1.value = inp2_v*1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'tb') {
                    inp1.value = inp2_v*1000000000;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'mb') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bit') {
                    inp1.value = inp2_v/8000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'byte') {
                    inp1.value = inp2_v/1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kb') {
                    inp1.value = inp2_v/1024;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mb') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gb') {
                    inp1.value = inp2_v*1024;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'tb') {
                    inp1.value = inp2_v*1024000;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'gb') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bit') {
                    inp1.value = inp2_v/8000000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'byte') {
                    inp1.value = inp2_v/1000000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kb') {
                    inp1.value = inp2_v/1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mb') {
                    inp1.value = inp2_v/1024;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gb') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'tb') {
                    inp1.value = inp2_v*1024;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'tb') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'bit') {
                    inp1.value = inp2_v/8000000000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'byte') {
                    inp1.value = inp2_v/1000000000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kb') {
                    inp1.value = inp2_v/1000000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mb') {
                    inp1.value = inp2_v/1024000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gb') {
                    inp1.value = inp2_v/1024;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'tb') {
                    inp1.value = inp2_v;
                }
            }
        }
    }
}

////////////////////////////// функции рассчета угла ///////////////////////////////////////

function corn_count() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'c') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'c') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'csec') {
                    inp2.value = inp1_v*3600;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmin') {
                    inp2.value = inp1_v*60;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cr') {
                    inp2.value = inp1_v*0.0174533;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'csec') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'c') {
                    inp2.value = inp1_v*0.000277778;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'csec') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmin') {
                    inp2.value = inp1_v*0,0166667;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cr') {
                    inp2.value = inp1_v*0.0000048481;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'cmin') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'c') {
                    inp2.value = inp1_v*0.0166667;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'csec') {
                    inp2.value = inp1_v*60;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmin') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cr') {
                    inp2.value = inp1_v*0.000290888;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'cr') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'c') {
                    inp2.value = inp1_v*57.2958;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'csec') {
                    inp2.value = inp1_v*206265;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmin') {
                    inp2.value = inp1_v*3437.75;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cr') {
                    inp2.value = inp1_v;
                }
            }
        }
    }
}
function corn_count2() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'c') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'c') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'csec') {
                    inp1.value = inp2_v/3600;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmin') {
                    inp1.value = inp2_v/60;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cr') {
                    inp1.value = inp2_v/0.0174533;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'csec') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'c') {
                    inp1.value = inp2_v/0.000277778;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'csec') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmin') {
                    inp1.value = inp2_v/0.0166667;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cr') {
                    inp1.value = inp2_v/0.0000048481;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'cmin') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'c') {
                    inp1.value = inp2_v/0.0166667;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'csec') {
                    inp1.value = inp2_v/60;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmin') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cr') {
                    inp1.value = inp2_v/0.000290888;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'cr') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'c') {
                    inp1.value = inp2_v/57.2958;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'csec') {
                    inp1.value = inp2_v/206265;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cmin') {
                    inp1.value = inp2_v/3437.75;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'cr') {
                    inp1.value = inp2_v;
                }
            }
        }
    }
}

////////////////////////////// функции рассчета площади ///////////////////////////////////////

function plosh_count() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'kvm') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kvm') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kvkm') {
                    inp2.value = inp1_v*0.000001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gek') {
                    inp2.value = inp1_v*0.0001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'akr') {
                    inp2.value = inp1_v*0.000247;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'kvkm') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kvm') {
                    inp2.value = inp1_v*1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kvkm') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gek') {
                    inp2.value = inp1_v*100;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'akr') {
                    inp2.value = inp1_v*247.1;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'gek') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kvm') {
                    inp2.value = inp1_v*10000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kvkm') {
                    inp2.value = inp1_v*0.00999;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gek') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'akr') {
                    inp2.value = inp1_v*2.471;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'akr') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kvm') {
                    inp2.value = inp1_v*4046.8;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kvkm') {
                    inp2.value = inp1_v*0.00405;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gek') {
                    inp2.value = inp1_v*0.4047;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'akr') {
                    inp2.value = inp1_v;
                }
            }
        }
    }
}
function plosh_count2() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'kvm') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kvm') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kvkm') {
                    inp1.value = inp2_v/0.000001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gek') {
                    inp1.value = inp2_v/0.0001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'akr') {
                    inp1.value = inp2_v/0.000247;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'kvkm') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kvm') {
                    inp1.value = inp2_v/1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kvkm') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gek') {
                    inp1.value = inp2_v/100;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'akr') {
                    inp1.value = inp2_v/247.1;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'gek') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kvm') {
                    inp1.value = inp2_v/10000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kvkm') {
                    inp1.value = inp2_v/0.00999;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gek') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'akr') {
                    inp1.value = inp2_v/2.471;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'akr') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kvm') {
                    inp1.value = inp2_v/4046.8;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kvkm') {
                    inp1.value = inp2_v/0.00405;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gek') {
                    inp1.value = inp2_v/0.4047;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'akr') {
                    inp1.value = inp2_v;
                }
            }
        }
    }
}

////////////////////////////// функции рассчета температуры ///////////////////////////////////////

function temp_count() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'ce') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'ce') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'far') {
                    inp2.value = (inp1_v*1.8)+32;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kel') {
                    inp2.value = inp1_v+273.15;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'far') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'ce') {
                    inp2.value = (inp1_v-32)/1.8;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'far') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kel') {
                    inp2.value = ((inp1_v-32)/1.8)+273.15;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'kel') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'ce') {
                    inp2.value = inp1_v-273.15;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'far') {
                    inp2.value = ((inp1_v-273)*1.8)+32;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kel') {
                    inp2.value = inp1_v;
                }
            }
        }
    }
}
function temp_count2() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'ce') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'ce') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'far') {
                    inp1.value = (inp2_v-32)/1.8;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kel') {
                    inp1.value = inp2_v-273.15;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'far') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'ce') {
                    inp1.value = (inp2_v*1.8)+32;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'far') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kel') {
                    inp1.value = ((inp2_v-273.15)*1.8)+32;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'kel') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'ce') {
                    inp1.value = inp2_v+273.15;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'far') {
                    inp1.value = ((inp2_v-32)/1.8)+273.15;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kel') {
                    inp1.value = inp2_v;
                }
            }
        }
    }
}

////////////////////////////// функции рассчета частоты ///////////////////////////////////////

function chast_count() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'gc') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gc') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kgc') {
                    inp2.value = inp1_v*0.001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mgc') {
                    inp2.value = inp1_v*0.000001;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'kgc') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gc') {
                    inp2.value = inp1_v*1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kgc') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mgc') {
                    inp2.value = inp1_v*0.001;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'mgc') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gc') {
                    inp2.value = inp1_v*1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kgc') {
                    inp2.value = inp1_v*1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mgc') {
                    inp2.value = inp1_v;
                }
            }
        }
    }
}
function chast_count2() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'gc') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gc') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kgc') {
                    inp1.value = inp2_v/0.001;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mgc') {
                    inp1.value = inp2_v/0.000001;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'kgc') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gc') {
                    inp1.value = inp2_v/1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kgc') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mgc') {
                    inp1.value = inp2_v/0.001;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'mgc') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'gc') {
                    inp1.value = inp2_v/1000000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kgc') {
                    inp1.value = inp2_v/1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'mgc') {
                    inp1.value = inp2_v;
                }
            }
        }
    }
}

////////////////////////////// функции рассчета энергии ///////////////////////////////////////

function energ_count() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'dz') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dz') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wt') {
                    inp2.value = inp1_v/3600;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kwt') {
                    inp2.value = inp1_v/3600000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kl') {
                    inp2.value = inp1_v*0.00024;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'wt') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dz') {
                    inp2.value = inp1_v*3600;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wt') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kwt') {
                    inp2.value = inp1_v*1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kl') {
                    inp2.value = inp1_v*0.8604;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'kwt') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dz') {
                    inp2.value = inp1_v*3600000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wt') {
                    inp2.value = inp1_v*1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kwt') {
                    inp2.value = inp1_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kl') {
                    inp2.value = inp1_v*860.4;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'kl') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dz') {
                    inp2.value = inp1_v*4184;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wt') {
                    inp2.value = inp1_v*1.16;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kwt') {
                    inp2.value = inp1_v*1001.16;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kl') {
                    inp2.value = inp1_v;
                }
            }
        }
    }
}
function energ_count2() {
    for (var i=0; i<sel1_options.length; i++) {
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'dz') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dz') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wt') {
                    inp1.value = inp2_v*3600;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kwt') {
                    inp1.value = inp2_v*3600000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kl') {
                    inp1.value = inp2_v/0.00024;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'wt') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dz') {
                    inp1.value = inp2_v/3600;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wt') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kwt') {
                    inp1.value = inp2_v/1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kl') {
                    inp1.value = inp2_v/0.8604;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'kwt') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dz') {
                    inp1.value = inp2_v/3600000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wt') {
                    inp1.value = inp2_v/1000;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kwt') {
                    inp1.value = inp2_v;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kl') {
                    inp1.value = inp2_v/860.4;
                }
            }
        }
        if (sel1_options[i].selected == true &&  sel1_options[i].id == 'kl') {
            for (var j=0; j<sel2_options.length; j++) {
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'dz') {
                    inp1.value = inp2_v/4184;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'wt') {
                    inp1.value = inp2_v/1.16;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kwt') {
                    inp1.value = inp2_v/1001.16;
                }
                if (sel2_options[j].selected == true &&  sel2_options[j].id == 'kl') {
                    inp1.value = inp2_v;
                }
            }
        }
    }
}

















