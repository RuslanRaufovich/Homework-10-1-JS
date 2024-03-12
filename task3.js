var time = {
    hh : 20,
    mm : 30,
    ss : 45
};


function showTime() {
    alert( ( '0' + time.hh).slice(-2) 
        + ":"
        + ('0' + time.mm).slice(-2)
        + ":" 
        + ('0' + time.ss).slice(-2)
        );
}

function setSecond(second) {

    // Проверяем нужно ли менять минуты.
    if (time.ss + second > 59) {
        // узнать сколько минут
        var mm = Math.floor(second / 60);

        // и сколько секунд оставить
        if (mm == 0) {
            setMinute(1);
            second = (time.ss + second) - 60;
            time.ss = 0;
        }
        else{
            setMinute(mm);
            second = (time.ss + second) - (mm * 60);
            time.ss = 0;
        }
    }

    // Меняем секунды.
    time.ss += second;
}

function setMinute(minute) {

    // Проверяем нужно ли менять часы.
    if (time.mm + minute > 59) {
        // узнать сколько часов
        var hh = Math.floor(minute / 60);

        // и сколько минут оставить
        if (hh == 0) {
            setHour(1);
            minute = (time.mm + minute) - 60;
            time.mm = 0;
        }
        else{
            setHour(hh);
            minute = (time.mm + minute) - (hh * 60);
            time.mm = 0;
        }
    }

    time.mm += minute;
}

function setHour(hour) {
    // TODO: set hour
    // Проверяем нужно ли менять счетчик часов.
    if (time.hh + hour > 23) {
        // узнать сколько дней (дни не выводим и не меняем).
        var dd = Math.floor(hour / 24);

        // и сколько минут оставить
        if (dd == 0) {
            hour = (time.hh + hour) - 24;
            time.hh = 0;
        }
        else{
            hour = (time.hh + hour) - (dd * 24);
            time.hh = 0;
        }
    }

    time.hh += hour;
}



function changeSeconds() {
    var ss = prompt("Введите кол-во секунд для изменения времени", "");

    setSecond(+ss);

    showTime();
}

function changeMinutes() {
    var mm = prompt("Введите кол-во минут для изменения времени", "");

    setMinute(+mm);

    showTime();
}

function changeHours() {
    var hh = prompt("Введите кол-во часов для изменения времени", "");

    setHour(+hh);

    showTime();
}