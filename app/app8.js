const calculator = {
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    times: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    },
    powerof: function(a, b){
        return a ** b;
    }
}

const plusResult = calculator.plus(3,3);
const minusResult = calculator.minus(plusResult, 5);
const timesResult = calculator.times(plusResult, minusResult);
const divideResult = calculator.divide(timesResult,minusResult);
const powerofResult = calculator.powerof(timesResult,divideResult);


console.log(minusResult);
