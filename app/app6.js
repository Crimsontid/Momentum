const calculator = {
    plus: function(a, b) {
        console.log(a + b);
    },
    minus: function(a, b) {
        console.log(a - b);
    },
    times: function(a, b){
        console.log(a * b);
    },
    divide: function(a, b){
        console.log(a / b);
    },
    powerof: function(a, b){
        console.log(a ** b);
    }
}

calculator.plus(3,3);
calculator.minus(10, 5);
calculator.times(3, 6);
calculator.divide(4,2);
calculator.powerof(3,2);