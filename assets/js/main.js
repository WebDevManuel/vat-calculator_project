function vatCalc() {
    let calc = document.querySelector("input[name=calc]:checked").value;
    let rate = parseFloat(document.querySelector("input[name=rate]:checked").value);
    let amount = parseFloat(document.querySelector("input[type=number]").value);
    let res;
    console.log(calc, rate, amount);
    switch (calc) {
        case "deduct":
            res = (amount / (1 + rate)).toFixed(2);
            semiRes = (amount-res).toFixed(2);
            document.querySelector(".result__vatAmount").innerHTML = semiRes.concat(" €");
            document.querySelector(".result__grossAmount").innerHTML = res.concat(" €");
            break;

        default:
            semiRes = (rate * amount).toFixed(2);
            res = ((1 + rate) * amount).toFixed(2);
            document.querySelector(".result__vatAmount").innerHTML = semiRes.concat(" €");
            document.querySelector(".result__grossAmount").innerHTML = res.concat(" €");
            break;
    }
    console.log(res, semiRes);
}