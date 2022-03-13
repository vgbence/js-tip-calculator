function formatMoney(value) {
    value = Math.ceil(value * 100) / 100; /* második tizedesjegy felkerekítve */
    value = value.toFixed(2);
    return value + " Ft"; 
}

function formatSplit(value) {
    if (value === "1") return value + " személy";
    return value + " fő"; 
}

function update() {
    let bill = Number(document.getElementById("yourBill").value);
    let tipPercent = document.getElementById("tipInput").value;
    let split = document.getElementById("splitInput").value;

    let tipValue = bill * (tipPercent / 100);
    console.log(tipPercent);

    let tipEach = tipValue / split;
    let newBillEach = (bill + tipValue) / split
   
    document.getElementById("tipPercent").innerHTML = tipPercent + " %";
    document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
    document.getElementById("totalWithTip").innerHTML = formatMoney(bill + tipValue);
    document.getElementById("splitValue").innerHTML = formatSplit(split);
    document.getElementById("billEach").innerHTML = formatMoney(newBillEach);
    document.getElementById("tipEach").innerHTML = formatMoney(tipEach);
}

let container = document.getElementById("container");
container.addEventListener("input", update);