const userAction = document.querySelector('.keys');
const display = document.querySelector('#display');
let expression = '';

userAction.addEventListener('click', (e) => {
    const value = e.target.dataset['value'];

    if (value !== undefined) {
        if (value == 'ac') {
            expression = '';
            display.value = 0;
            return true;
        } else if (value == 'del') {
            expression = expression.slice(0, -1)
        } else if (value == 'exp') {
            expression = Math.exp(expression);
        } else if (value == 'ln') {
            expression = Math.log(expression);
        } else if (value == 'log10') {
            expression = Math.log10(expression);
        } else if (value == 'rad') {
            expression = radians(expression);
        } else if (value == 'deg') {
            expression = degrees(expression);
        } else if (value == 'sin') {
            expression = Math.sin(expression);
        } else if (value == 'cos') {
            expression = Math.cos(expression);
        } else if (value == 'tan') {
            expression = Math.tan(expression);
        } else if (value == 'x!') {
            expression = factorial(expression)
        } else if (value == '%') {
            expression = expression / 100;
        } else if (value == 'radic') {
            expression = Math.sqrt(expression);
        } else if (value == 'x^2') {
            expression = expression * expression;
        } else if (value == "x^") {
            expression += '^';
        } else if (value == 'pi') {
            expression = Math.PI * (expression);
        } else if (value == '=') {
            if(expression.includes('^')){
                const answer = eval(calculatePower(expression));
                expression = answer;
            }else{
                const answer = eval(expression);
                expression = answer;
            }
        } else {
            expression += value;
        }

        if (expression == undefined) {
            expression = '';
            display.value = 0;
        } else {
            display.value = expression;
        }
        return expression;
    }
});

function calculatePower (expression){
    const splitValues = expression.split('^');
    const base = parseFloat(splitValues[0]);
    const exponent = parseFloat(splitValues[1]);
    return Math.pow(base,exponent);
}

function factorial(expression) {
    let fac = 1;
    for (let i = expression; i > 0; i--) {
        fac *= i;
    }
    return fac;
}

function radians(expression) {
    let pi = Math.PI;
    let value = expression * (pi / 180);
    console.log(value);
    return value;
}

function degrees(expression) {
    if (expression == 0) {
        return 0;
    } else {
        let pi = Math.PI;
        let value = expression * (180 / pi);
        console.log(value);
        return value;
    }
}

