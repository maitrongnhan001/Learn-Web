//row 1
var result = 0;
var number1 = 0;
var number2 = 0
var calculator = "";
var count = 0;
//display number to sreeen
function updateSreen() {
    const screen = document.getElementById("sc");
    screen.textContent = result;
}
//calaculator
function calculator_result() {
    if (calculator === "") {
        return result;
    }
    switch (calculator) {
        case "%":
            return number1 % number2;
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "*":
            return number1 * number2;
        case "/":
            if (number2 === 0) {
                return "Error"
            }
            return number1 / number2;
    }
}
const k1 = document.getElementById("1");
k1.onclick = (e) => {
    //clear
    number1 = 0;
    number2 = 0;
    result = 0;
    calaculator = "";
    count = 0;
    updateSreen();
}

const k2 = document.getElementById("2");
k2.onclick = () => {
    //delete 1 element
    if (result !== 0) {
        result = parseInt(result / 10);
        updateSreen();
        if (number2 !== 0) {
            number2 = result;
            return;
        }
        if (number1 !== 0) {
            numner1 = result;
            return;
        }
    }
}

const k3 = document.getElementById("3");
k3.onclick = () => {
    //mod
    if (result !== 0) {
        //convert result
        result = (typeof(result) === "string") ? parseFloat(result) : result;
        //entered first agument
        calculator = "%";
        count = 0;
        if (number2 !== 0) {
            result = calculator_result();
            updateSreen();
            //update argument
            number1 = result;
            number2 = 0;
        }
    }
}

const k4 = document.getElementById("4");
k4.onclick = () => {
    //add
    if (result !== 0) {
        //convert result
        result = (typeof(result) === "string") ? parseFloat(result) : result;
        //entered first agument
        calculator = "+";
        count = 0;
        if (number2 !== 0) {
            result = calculator_result();
            updateSreen();
            //update argument
            number1 = result;
            number2 = 0;
        }
    }
}
//row2
const k5 = document.getElementById("5");
k5.onclick = () => {
    //7
    //float
    if(typeof(result) === "string") {
        if (result.indexOf(".") !== -1) {
            if (number1 === 0 || calculator === "") {
                let number = result + "7";
                result = number;
                number = parseFloat(number);
                number1 = number;
            } else {
                let number = result + "7";
                result = number;
                number = parseFloat(number);
                number2 = number;
            }
            updateSreen();
            return;
        }
    }
    //integer
    if (number1 === 0 || calculator === "") {
        let number = number1 * 10;
        result = number1 = number + 7;
    } else {
        let number = number2 * 10;
        result = number2 = number + 7;
    }
    updateSreen();
}

const k6 = document.getElementById("6");
k6.onclick = () => {
    //8
    //float
    if(typeof(result) === "string") {
        if (result.indexOf(".") !== -1) {
            if (number1 === 0 || calculator === "") {
                let number = result + "8";
                result = number;
                number = parseFloat(number);
                number1 = number;
            } else {
                let number = result + "8";
                result = number;
                number = parseFloat(number);
                number2 = number;
            }
            updateSreen();
            return;
        }
    }
    //integer
    if (number1 === 0 || calculator === "") {
        let number = number1 * 10;
        result = number1 = number + 8;
    } else {
        let number = number2 * 10;
        result = number2 = number + 8;
    }
    updateSreen();
}

const k7 = document.getElementById("7");
k7.onclick = () => {
    //9
    //float
    if(typeof(result) === "string") {
        if (result.indexOf(".") !== -1) {
            if (number1 === 0 || calculator === "") {
                let number = result + "9";
                result = number;
                number = parseFloat(number);
                number1 = number;
            } else {
                let number = result + "9";
                result = number;
                number = parseFloat(number);
                number2 = number;
            }
            updateSreen();
            return;
        }
    }
    //integer
    if (number1 === 0 || calculator === "") {
        let number = number1 * 10;
        result = number1 = number + 9;
    } else {
        let number = number2 * 10;
        result = number2 = number + 9;
    }
    updateSreen();
}

const k8 = document.getElementById("8");
k8.onclick = () => {
    //sub
    if (result !== 0) {
        //convert result
        result = (typeof(result) === "string") ? parseFloat(result) : result;
        //entered first agument
        calculator = "-";
        count = 0;
        if (number2 !== 0) {
            result = calculator_result();
            updateSreen();
            //update argument
            number1 = result;
            number2 = 0;
        }
    }
}
//row 3
const k9 = document.getElementById("9");
k9.onclick = () => {
    //4
    //float
    if(typeof(result) === "string") {
        if (result.indexOf(".") !== -1) {
            if (number1 === 0 || calculator === "") {
                let number = result + "4";
                result = number;
                number = parseFloat(number);
                number1 = number;
            } else {
                let number = result + "4";
                result = number;
                number = parseFloat(number);
                number2 = number;
            }
            updateSreen();
            return;
        }
    }
    //integer
    if (number1 === 0 || calculator === "") {
        let number = number1 * 10;
        result = number1 = number + 4;
    } else {
        let number = number2 * 10;
        result = number2 = number + 4;
    }
    updateSreen();
}

const k10 = document.getElementById("10");
k10.onclick = () => {
    //5
    //float
    if(typeof(result) === "string") {
        if (result.indexOf(".") !== -1) {
            if (number1 === 0 || calculator === "") {
                let number = result + "5";
                result = number;
                number = parseFloat(number);
                number1 = number;
            } else {
                let number = result + "5";
                result = number;
                number = parseFloat(number);
                number2 = number;
            }
            updateSreen();
            return;
        }
    }
    //integer
    if (number1 === 0 || calculator === "") {
        let number = number1 * 10;
        result = number1 = number + 5;
    } else {
        let number = number2 * 10;
        result = number2 = number + 5;
    }
    updateSreen();
}

const k11 = document.getElementById("11");
k11.onclick = () => {
    //6
    //float
    if(typeof(result) === "string") {
        if (result.indexOf(".") !== -1) {
            if (number1 === 0 || calculator === "") {
                let number = result + "6";
                result = number;
                number = parseFloat(number);
                number1 = number;
            } else {
                let number = result + "6";
                result = number;
                number = parseFloat(number);
                number2 = number;
            }
            updateSreen();
            return;
        }
    }
    //integer
    if (number1 === 0 || calculator === "") {
        let number = number1 * 10;
        result = number1 = number + 6;
    } else {
        let number = number2 * 10;
        result = number2 = number + 6;
    }
    updateSreen();
}

const k12 = document.getElementById("12");
k12.onclick = () => {
    //mul
    if (result !== 0) {
        //convert result
        result = (typeof(result) === "string") ? parseFloat(result) : result;
        //entered first agument
        calculator = "*";
        count = 0;
        if (number2 !== 0) {
            result = calculator_result();
            updateSreen();
            //update argument
            number1 = result;
            number2 = 0;
        }
    }
}
//row 4
const k13 = document.getElementById("13");
k13.onclick = () => {
    //1
    //float
    if(typeof(result) === "string") {
        if (result.indexOf(".") !== -1) {
            if (number1 === 0 || calculator === "") {
                let number = result + "1";
                result = number;
                number = parseFloat(number);
                number1 = number;
            } else {
                let number = result + "1";
                result = number;
                number = parseFloat(number);
                number2 = number;
            }
            updateSreen();
            return;
        }
    }
    //integer
    if (number1 === 0 || calculator === "") {
        let number = number1 * 10;
        result = number1 = number + 1;
    } else {
        let number = number2 * 10;
        result = number2 = number + 1;
    }
    updateSreen();
}

const k14 = document.getElementById("14");
k14.onclick = () => {
    //2
    //float
    if(typeof(result) === "string") {
        if (result.indexOf(".") !== -1) {
            if (number1 === 0 || calculator === "") {
                let number = result + "2";
                result = number;
                number = parseFloat(number);
                number1 = number;
            } else {
                let number = result + "2";
                result = number;
                number = parseFloat(number);
                number2 = number;
            }
            updateSreen();
            return;
        }
    }
    //integer
    if (number1 === 0 || calculator === "") {
        let number = number1 * 10;
        result = number1 = number + 2;
    } else {
        let number = number2 * 10;
        result = number2 = number + 2;
    }
    updateSreen();
}

const k15 = document.getElementById("15");
k15.onclick = () => {
    //3
    //float
    if(typeof(result) === "string") {
        if (result.indexOf(".") !== -1) {
            if (number1 === 0 || calculator === "") {
                let number = result + "3";
                result = number;
                number = parseFloat(number);
                number1 = number;
            } else {
                let number = result + "3";
                result = number;
                number = parseFloat(number);
                number2 = number;
            }
            updateSreen();
            return;
        }
    }
    //integer
    if (number1 === 0 || calculator === "") {
        let number = number1 * 10;
        result = number1 = number + 3;
    } else {
        let number = number2 * 10;
        result = number2 = number + 3;
    }
    updateSreen();
}

const k16 = document.getElementById("16");
k16.onclick = () => {
    //div
    if (result !== 0) {
        //convert result
        result = (typeof(result) === "string") ? parseFloat(result) : result;
        //entered first agument
        calculator = "/";
        count = 0;
        if (number2 !== 0) {
            result = calculator_result();
            updateSreen();
            //update argument
            number1 = result;
            number2 = 0;
        }
    }
}
//row 5
const k17 = document.getElementById("17");
k17.onclick = () => {
    //0
    //float
    if(typeof(result) === "string") {
        if (result.indexOf(".") !== -1) {
            if (number1 === 0 || calculator === "") {
                let number = result + "0";
                result = number;
                number = parseFloat(number);
                number1 = number;
            } else {
                let number = result + "0";
                result = number;
                number = parseFloat(number);
                number2 = number;
            }
            updateSreen();
            return;
        }
    }
    //integer
    if (number1 === 0 || calculator === "") {
        result = number1 = 0;
    } else {
        result = number2 = 0;
    }
    count = 0;
    updateSreen();
}

const k18 = document.getElementById("18");
k18.onclick = () => {
    //swap +/- 
    if (number2 !== 0) {
        result = number2 = -number2;
        updateSreen();
        return;
    }
    if (number1 !== 0) {
        result = number1 = -number1;
        updateSreen();
        return;
    }
}

const k19 = document.getElementById("19");
k19.onclick = () => {
    //float
    result = result + ".";
    updateSreen();
    return;
}

const k20 = document.getElementById("20");
k20.onclick = () => {
    //calculator
    if (count === 0) {
        result = calculator_result();
        updateSreen();
        number2 = 0;
        count++;
        calculator = "";
    }
}
