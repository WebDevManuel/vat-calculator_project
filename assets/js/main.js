///////////////which radio button is checked?
function deduct() {
    console.log("deduct()");
    document.querySelector('.netOrGrossTxt').innerHTML = "Gross Amount In Euro<span>*</span>";
    document.querySelector('.result__netOrGross').innerHTML = "Net Amount";
}

function add() {
    console.log("add()");
    document.querySelector('.netOrGrossTxt').innerHTML = "Net Amount In Euro<span>*</span>";
    document.querySelector('.result__netOrGross').innerHTML = "Gross Amount";
}

function vatCalc() {
    let calc = document.querySelector('input[name=calc]:checked').value;
    let rate = parseFloat(document.querySelector('input[name=rate]:checked').value);
    let amount = parseFloat(document.querySelector('input[type=number]').value);
    let res;
    console.log(calc, rate, amount);

    if (calc == 'add') {
        semiRes = (rate * amount).toFixed(2);
        res = ((1 + rate) * amount).toFixed(2);
        document.querySelector('.result__vatAmount').innerHTML = semiRes.concat(" €uro");
        document.querySelector('.result__grossAmount').innerHTML = res.concat(" €uro");
    } else {
        res = (amount / (1 + rate)).toFixed(2);
        semiRes = (amount - res).toFixed(2);
        document.querySelector('.result__vatAmount').innerHTML = semiRes.concat(" €uro");
        document.querySelector('.result__grossAmount').innerHTML = res.concat(" €uro");
        document.querySelector('.result__grossAmount').innerHTML = res.concat(" €uro");
    }
}