let result = 0;
const from = document.getElementById("from");
const to = document.getElementById("to");
document.querySelector("#convert").addEventListener('click', function () {
    let num1 = document.querySelector("#number1").value;
    let fromValue = from.options[from.selectedIndex].text;
    let toValue = to.options[to.selectedIndex].text;
    convert(fromValue, toValue, num1);
    num1 = fromValue = toValue = 0;
});

function convert(from, to, num1) {
    result = 0;
    if (from !== to) {
        switch (from) {
            case 'Inches':
                result = num1 * 2.54;
                break;
            case 'Feet':
                result = num1 * 30.48;
                break;
            case 'Yards':
                result = num1 * 91.44;
                break;
            case 'Meters':
                result = num1 * 100;
                break;
            case 'Kilometer':
                result = num1 * 100000;
                break;
            case 'Miles':
                result = num1 * 160934.4;
                break;
            default:
                result = num1;
                break;
        }

        switch (to) {
            case 'Inches':
                result = result / 2.54;
                break;
            case 'Feet':
                result = result / 30.48;
                break;
            case 'Yards':
                result = result / 91.44;
                break;
            case 'Meters':
                result = result / 100;
                break;
            case 'Kilometer':
                result = result / 100000;
                break;
            case 'Miles':
                result = result / 160934.4;
                break;
            default:
                result = result;
                break;
        }
    } else {
        result = num1;
    }

    document.querySelector("#result").textContent = 'Answer: '+result;

}