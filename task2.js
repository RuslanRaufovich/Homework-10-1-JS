var fractionOne = {};
fractionOne.numerator = 2;
fractionOne.denomerator = 4;

var fractionTwo = {};
fractionTwo.numerator = 1;
fractionTwo.denomerator = 4;

var fractionAnswer = {};

// Вывод объекта дроби.
function showFraction(obj) {
    return obj.numerator + "/" + obj.denomerator;
}


// Нахождение общего знаменателя.
function commonDenom(obj1, obj2) {
    var temp_den = obj1.denomerator;	// переменная для хранения знаменателя		// присваиваем ей знаменатель 1й дроби
    // 1й числ = умножаем 1й числитель на 2й знаменатель
    obj1.numerator = obj1.numerator * obj2.denomerator;		
    // 1й знам = умножаем 1й знаменатель на 2й знаменатель
    obj1.denomerator = obj1.denomerator * obj2.denomerator;
    // 2й числ = умножаем 2й числитель на 1й знаменатель (сохраненный в t_den)
    obj2.numerator = obj2.numerator * temp_den;
    // 2й знам = умножаем 2й знаменатель на 1й знаменатель (сохраненный в t_den)
    obj2.denomerator = obj2.denomerator * temp_den;
}


// Вычисление суммы.
function sum(obj1, obj2) {
    var tempFract = {
        numerator : 0,
        denomerator : 0
    };

    if (obj1.denomerator != obj2.denomerator) {	// если знаменатели равны
        commonDenom(obj1, obj2); // передаем ссылки на n и d (вторые числитель и знаменатель) чтобы привести дроби к общему знаменателю
    }

    tempFract.numerator = obj1.numerator + obj2.numerator;	// плюсуем числители
    tempFract.denomerator = obj1.denomerator;

    return tempFract;
}

// Вычисление вычитания.
function minus(obj1, obj2) {  
    var tempFract = {
        numerator : 0,
        denomerator : 0
    };

    if (obj1.denomerator != obj2.denomerator) {	// если знаменатели равны
        commonDenom(obj1, obj2); // передаем ссылки на n и d (вторые числитель и знаменатель) чтобы привести дроби к общему знаменателю
    }

    tempFract.numerator = obj1.numerator - obj2.numerator;	// минусуем числители
    tempFract.denomerator = obj1.denomerator;

    return tempFract;
}
// Вычисление умножения.
function multiply(obj1, obj2) {  
    var tempFract = {
        numerator : 0,
        denomerator : 0
    };

    tempFract.numerator = obj1.numerator * obj2.numerator;
    tempFract.denomerator = obj1.denomerator * obj2.denomerator;

    tempFract = reduction(tempFract);

    return tempFract;
}
// Вычисление деления.
function divide(obj1, obj2) {  
    var tempFract = {
        numerator : 0,
        denomerator : 0
    };

    tempFract.numerator = obj1.numerator * obj2.denomerator;	// умножаем числитель 1й дроби на знаменатель 2й дроби
    tempFract.denomerator = obj1.denomerator * obj2.numerator;	// умножаем знаменатель 1й дроби на числитель 2й дроби

    tempFract = reduction(tempFract);

    return tempFract;
}
// Сокращение дроби.
function reduction(obj) {
    var nod = 1;	// наибольший общий делитель (Нод)
    var tempFract = {
        numerator : obj.numerator,
        denomerator : obj.denomerator
    };
    for (var i = tempFract.numerator; i > 1; i--) {		// проверяем начиная с числителя, до 1
        if ((tempFract.numerator % i == 0) &&		// если числитель и знаменатель деляться на i без остатка,
            (tempFract.denomerator % i == 0)) {		// то
            tempFract.numerator /= i;	// числитель делим на i
            tempFract.denomerator /= i;	// знаменатель делим на i
            nod = i;	// запоминаем число на которое делили (Нод)
        }
    }

    return tempFract;
}


// Показать вычисление.
function showCompute(sign) {

    switch (sign) {
        case '+':
            fractionAnswer = sum(fractionOne, fractionTwo);
            break;
        case '-':
            fractionAnswer = minus(fractionOne, fractionTwo);
            break;
        case '*':
            fractionAnswer = multiply(fractionOne, fractionTwo);
            break;
        case '/':
            fractionAnswer = divide(fractionOne, fractionTwo);
            break;
        case '=':
            fractionAnswer = reduction(fractionOne);
            // Выводим результат сокращения
            showReductionResult(fractionOne, fractionAnswer);
            return;
    
        default:
            alert("[error] недопустимый знак вычисения!")
            return;
    }
    
    // Выводим формулу и результат вычисления.
    alert(
        showFraction(fractionOne) 
        + " " + sign + " " 
        + showFraction(fractionTwo) 
        + " = " 
        + showFraction(fractionAnswer)
        );
}

function showReductionResult(obj1, objAnswer) {
    // Выводим формулу и результат вычисления.
    alert(
        showFraction(obj1) 
        + " = " 
        + showFraction(objAnswer)
        );
}