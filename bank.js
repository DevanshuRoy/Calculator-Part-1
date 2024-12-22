var cb=document.getElementById("balance").innerHTML;
cb=Number(cb);

var s_no=0;

function deposit() {

    let name=document.getElementById("Name").value;
    let amount=document.getElementById("Amount").value;

    if (validateEmpty(name, amount) === false || validateAmount(amount) === false) {
        return;
    }

    name=String(name);
    amount=Number(amount);

    cb=amount+cb;
    document.getElementById("balance").innerHTML=cb;

    alert("Deposited ₹"+amount+" for "+name);
    addWidget(name,amount,cb);

}

function withdraw() {

    let name=document.getElementById("Name").value;
    let amount=document.getElementById("Amount").value;

    if (validateEmpty(name, amount) === false || validateWithdraw(amount) === false) {
        return;
    }

    name=String(name);
    amount=Number(amount);
    amount=amount*-1;

    cb=amount+cb;
    document.getElementById("balance").innerHTML=cb;

    alert("Withdrawn ₹"+amount+" for "+name);
    addWidget(name,amount,cb);

}

function validateEmpty (name,amount) {
    try {

        if (name=="" || amount=="") {
            throw new Error;
        }

    }

    catch (error) {
        alert("Fill values");
        return false;
    }
    return true;
}

function validateAmount (amount) {
    try {

        if (amount>50000000 || amount<0 || amount==0) {
            throw new Error;
        }

    }

    catch (error) {
        alert("Amount can not be greater than 1000000 or negative or 0");
        return false;
    }
    return true;
}

function validateWithdraw (amount) {
    try {

        if (amount>cb || amount<0 || amount==0) {
            throw new Error;
        }

    }

    catch (error) {
        alert("Amount can not be greater than current balance or negative or 0");
        return false;
    }
    return true;
}

function addWidget(name,amount,cb) {

    s_no+=1;

    let currentDate = new Date();

    let hours=currentDate.getHours();
    let minutes=currentDate.getMinutes();
    let seconds=currentDate.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let currentTime=hours+":"+minutes+":"+seconds;

    if (amount>0) {

        var newHTML = `<div style="position: relative; margin-top: 1.5vh; left: 0.75%; background-color: rgb(33, 33, 33); height: auto; width: 98.5%; border-radius: 0.8vw; display: flex; justify-content: left; align-items: center;"><p class="headers" style="position: relative; margin-left: 3vw; width: 5vw;">${s_no}</p><p class="headers" style="position: relative; margin-left: 4vw; width: 8vw;">${currentTime}</p><p class="headers" style="position: relative; margin-left: 6vw; width: 24vw;">${name}</p><p class="headers" style="position: relative; margin-left: 3.6vw; width: 12vw;">-----</p><p class="headers" style="position: relative; margin-left: 4vw; width: 12vw;">${amount}</p><p class="headers" style="position: relative; margin-left: 3vw; width: 8vw;">${cb}</p></div>`;
                

        document.getElementById("Transactions").innerHTML+=newHTML;

    }

    else {

        var newHTML = `<div style="position: relative; margin-top: 1.5vh; left: 0.75%; background-color: rgb(33, 33, 33); height: auto; width: 98.5%; border-radius: 0.8vw; display: flex; justify-content: left; align-items: center;"><p class="headers" style="position: relative; margin-left: 3vw; width: 5vw;">${s_no}</p><p class="headers" style="position: relative; margin-left: 4vw; width: 8vw;">${currentTime}</p><p class="headers" style="position: relative; margin-left: 6vw; width: 24vw;">${name}</p><p class="headers" style="position: relative; margin-left: 3.6vw; width: 12vw;">${amount}</p><p class="headers" style="position: relative; margin-left: 4vw; width: 12vw;">-----</p><p class="headers" style="position: relative; margin-left: 3vw; width: 8vw;">${cb}</p></div>`;
                

        document.getElementById("Transactions").innerHTML+=newHTML;

    }

    return s_no
    
}

function clearTransactions() {
    const container = document.getElementById("Transactions");
    container.innerHTML = "";
}