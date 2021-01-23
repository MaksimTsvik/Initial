"use strict";

function pow(x, n) {
    if (n < 0) return NaN;
    if (Math.round(n) != n) return NaN;
    return Math.pow(x, n);
}

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }
}

ladder.up().up().down().up().down().showStep();