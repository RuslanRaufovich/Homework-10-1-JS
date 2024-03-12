var car = {
    manufacturer: "BMW",
    model: "M5",
    year: 2000,
    averageSpeed: 70
};

function showCarInfo(obj) {
    var str = "Производитель: " + obj.manufacturer + "\n"
        + "Модель: " + obj.model + "\n"
        + "Год выпуска: " + obj.year + " г\n"
        + "Средняя скорость: " + obj.averageSpeed + " км/ч";
    alert(str);
}

function showTravelTime() {

    var length = prompt("Введите расстояние (км)", "");

    var time = computeTravelTime(length)

    alert("Средняя скорость: " + car.averageSpeed + " км/ч\n"
        + "Расстояние: " + length + " км\n"
        + "Время для преодоления: " + time + " ч");
}

function computeTravelTime(length) {
    var t = Math.round(
        (length / car.averageSpeed) * 100
        ) / 100;

    // находим остаток
    var ost = t % 1;
    // преобразовуем в минуты
    ost = ost * 0.6;
    // время (остаток в минутах)
    t = Math.floor(t) + ost;

    // учитываем перерыв на 1 час (каждые 4 часа дороги).
    var breakTime = Math.floor(t / 4);
    return (t + breakTime).toFixed(2);
}