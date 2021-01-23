"use strict";

function pow(x, n) {
    if (n < 0) return NaN;
    if (Math.round(n) != n) return NaN;
    return Math.pow(x, n);
}

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt('Type a number', '');
    };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений